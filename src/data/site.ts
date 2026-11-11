export const SITE = {
  name: "Northgo",
  url: "https://yjhwang59.github.io/northgo-w3/",
  email: "info.tpe@northgo.com",
  phone: "+886-2-2531-8677",
  founded: 1988,
  rebranded: "2024-11-11",
  officeCount: 7,
  certifications: ["IATA", "ISO 45001", "AEO"] as const,
  defaultLocale: "en" as const,
  locales: ["en", "zh-tw"] as const
};

export type Locale = (typeof SITE.locales)[number];

/** Astro base path with a trailing slash, e.g. `/` or `/northgo-w3/`. */
export function siteBase(): string {
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base : `${base}/`;
}

/** Join a site-relative path onto the configured base. */
export function withBase(path = "/"): string {
  const base = siteBase();
  if (path === "/" || path === "") return base === "/" ? "/" : base.slice(0, -1) || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

export function isLocale(value: string): value is Locale {
  return (SITE.locales as readonly string[]).includes(value);
}

/** Locale-aware path. English stays at site root (after base). */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return withBase(clean || "/");
  return withBase(`/${locale}${clean || ""}`);
}

export function alternatePaths(path = "/"): Record<Locale, string> {
  return {
    en: localePath("en", path),
    "zh-tw": localePath("zh-tw", path)
  };
}
