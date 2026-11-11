/** English legal source text. zh-tw pages show this with a language notice. */
export const LEGAL = {
  privacy: {
    heading: "Privacy Policy",
    updated: "Last updated: 11 November 2024",
    sections: [
      {
        title: "1. Who we are",
        body: "Northgo Inc. (“Northgo”, “we”) operates www.northgo.com. Contact: info@northgo.com · +886-2-2531-8677 · 7F., No. 10, Sec. 3 Minsheng E. Rd., Taipei City 104511, Taiwan."
      },
      {
        title: "2. Information we collect",
        body: "When you submit an enquiry we collect the details you provide (name, company, email, phone, country, service interest, and message). We also receive standard technical logs from our hosting provider (such as IP address and user agent) needed to operate and secure the site."
      },
      {
        title: "3. How we use information",
        body: "We use enquiry data to respond to your request and to improve our services. We do not sell personal information. We may share data with processors who host email or the website, solely to deliver those services."
      },
      {
        title: "4. Retention",
        body: "Enquiry records are kept as long as needed to handle your request and meet legal or operational requirements, then deleted or anonymised."
      },
      {
        title: "5. Your choices",
        body: "You may request access, correction, or deletion of personal data we hold about you by emailing info@northgo.com. We may need to verify your identity before acting on a request."
      },
      {
        title: "6. Changes",
        body: "We may update this policy. The date above reflects the latest revision published on this site."
      }
    ]
  },
  terms: {
    heading: "Terms of Service",
    updated: "Last updated: 11 November 2024",
    sections: [
      {
        title: "1. Acceptance",
        body: "By using www.northgo.com you agree to these terms. If you do not agree, please do not use the site."
      },
      {
        title: "2. Website purpose",
        body: "This website provides information about Northgo services and a channel to send enquiries. Content is for general information and does not form a binding logistics contract unless confirmed separately in writing."
      },
      {
        title: "3. Enquiries",
        body: "Submitting a form does not guarantee capacity, rates, or transit times. Quotations and service terms are issued through Northgo’s commercial process."
      },
      {
        title: "4. Acceptable use",
        body: "You may not misuse the site, attempt unauthorised access, or submit unlawful, harmful, or misleading content."
      },
      {
        title: "5. Intellectual property",
        body: "Site text, branding, and design belong to Northgo or its licensors. You may not copy or reuse them without permission."
      },
      {
        title: "6. Contact",
        body: "Questions about these terms: info@northgo.com · +886-2-2531-8677."
      }
    ]
  },
  cookie: {
    heading: "Cookie Policy",
    updated: "Last updated: 11 November 2024",
    sections: [
      {
        title: "1. What we use",
        body: "The site may use essential cookies or similar storage required for security, language preference, and basic operation. We aim to keep third-party tracking minimal."
      },
      {
        title: "2. Analytics",
        body: "If privacy-oriented analytics are enabled, they are configured to avoid unnecessary personal identifiers. You can control cookies through your browser settings."
      },
      {
        title: "3. Updates",
        body: "This policy may change when our tooling changes. Check this page for the latest description."
      }
    ]
  },
  disclaimer: {
    heading: "Legal Disclaimer",
    updated: "Last updated: 11 November 2024",
    sections: [
      {
        title: "1. Information only",
        body: "Content on www.northgo.com is provided for general information. It may be updated without notice and may not cover every operational scenario."
      },
      {
        title: "2. No warranty",
        body: "To the fullest extent permitted by law, Northgo disclaims warranties regarding accuracy, completeness, or fitness for a particular purpose of website content."
      },
      {
        title: "3. Liability",
        body: "Northgo is not liable for loss arising from use of or reliance on website content, except where liability cannot be excluded by applicable law."
      },
      {
        title: "4. Third-party links",
        body: "Links to third-party sites are provided for convenience. Northgo does not control and is not responsible for their content or practices."
      },
      {
        title: "5. Logistics services",
        body: "Actual logistics services are governed by separate contracts, quotations, and applicable transport conventions—not solely by this website."
      },
      {
        title: "6. Contact Us",
        body: "Email info@northgo.com · Phone +886-2-2531-8677 · Address 7F., No. 10, Sec. 3 Minsheng E. Rd., Taipei City 104511, Taiwan."
      }
    ]
  }
} as const;

export type LegalKey = keyof typeof LEGAL;
