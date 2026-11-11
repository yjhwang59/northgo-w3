type Env = {
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
  RESEND_API_KEY?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
};

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function clientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function clean(value: FormDataEntryValue | null, max = 500): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;
  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return json({ error: "Too many requests. Please try again shortly." }, 429);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Invalid form payload." }, 400);
  }

  // Honeypot
  if (clean(form.get("website"))) {
    return json({ ok: true });
  }

  const firstName = clean(form.get("firstName"), 80);
  const lastName = clean(form.get("lastName"), 80);
  const company = clean(form.get("company"), 120);
  const email = clean(form.get("email"), 160);
  const phone = clean(form.get("phone"), 60);
  const country = clean(form.get("country"), 80);
  const message = clean(form.get("message"), 4000);
  const locale = clean(form.get("locale"), 16) || "en";
  const acceptTerms = clean(form.get("acceptTerms"), 8);
  const services = form
    .getAll("services")
    .map((v) => clean(v, 40))
    .filter(Boolean);

  if (!firstName || !lastName || !company || !email || !phone || !country || !message) {
    return json({ error: "Missing required fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid email." }, 400);
  }
  if (acceptTerms !== "yes") {
    return json({ error: "Terms must be accepted." }, 400);
  }

  const to = env.ENQUIRY_TO || "info.tpe@northgo.com";
  const from = env.ENQUIRY_FROM || "enquiries@northgo.com";
  const subject = `[Northgo enquiry] ${company} — ${firstName} ${lastName}`;
  const text = [
    `Locale: ${locale}`,
    `Name: ${firstName} ${lastName}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Country: ${country}`,
    `Services: ${services.join(", ") || "(none selected)"}`,
    "",
    message,
    "",
    `IP: ${ip}`
  ].join("\n");

  if (!env.RESEND_API_KEY) {
    console.log("enquiry.received", { to, subject, email, company, services });
    // Accept the enquiry in preview/local builds without mail credentials.
    return json({
      ok: true,
      delivered: false,
      message: "Enquiry accepted. Configure RESEND_API_KEY to send email."
    });
  }

  const mailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from: `Northgo Website <${from}>`,
      to: [to],
      reply_to: email,
      subject,
      text
    })
  });

  if (!mailRes.ok) {
    const detail = await mailRes.text();
    console.error("enquiry.mail_failed", detail);
    return json({ error: "Unable to deliver enquiry right now." }, 502);
  }

  return json({ ok: true, delivered: true });
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      allow: "POST, OPTIONS",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type"
    }
  });
}
