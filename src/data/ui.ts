import type { Locale } from "./site";

export type ServiceKey =
  | "freight"
  | "project"
  | "warehouse"
  | "shipping";

export const SERVICE_SLUGS: Record<ServiceKey, string> = {
  freight: "freight-logistics",
  project: "project-logistics",
  warehouse: "warehouse-logistics",
  shipping: "shipping-agency"
};

export const UI = {
  en: {
    htmlLang: "en",
    skip: "Skip to content",
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      enquire: "Enquire now",
      getInTouch: "Get in touch",
      learnMore: "Learn more",
      menu: "Menu",
      close: "Close",
      language: "Language"
    },
    services: {
      freight: {
        name: "Freight Logistics",
        blurb:
          "Reliable freight forwarding by ocean, air, land, and customs clearance."
      },
      project: {
        name: "Project Logistics",
        blurb:
          "Door-to-door handling for oversized, heavy, and high-value project cargo."
      },
      warehouse: {
        name: "Warehouse Logistics",
        blurb:
          "Flexible storage at Taichung Port for offshore and large-scale projects."
      },
      shipping: {
        name: "Shipping Agency",
        blurb:
          "Port agency and vessel support from berthing to crew coordination."
      }
    },
    footer: {
      company: "Company",
      services: "Services",
      legal: "Legal",
      locations: "Locations",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
      disclaimer: "Legal Disclaimer",
      credit: "Strategy Creative",
      rights: "All rights reserved."
    },
    form: {
      heading: "How can we help?",
      firstName: "First name",
      lastName: "Last name",
      company: "Company",
      email: "Email",
      phone: "Phone number",
      country: "Country",
      countryPlaceholder: "Select one...",
      services: "What services are you interested in?",
      other: "Other",
      message: "Message",
      messagePlaceholder: "Type your message...",
      acceptTerms: "I accept the",
      termsLink: "Terms",
      submit: "Submit",
      sending: "Sending…",
      success: "Thank you. Your enquiry has been received.",
      error: "Something went wrong while submitting the form. Please try again.",
      required: "Required"
    },
    offices: {
      heading: "Our global offices",
      intro:
        "Northgo’s network of offices supports logistics across Taiwan, Japan, Vietnam, and the United States.",
      filterLabel: "Region",
      listHeading: "Offices",
      hq: "Head office",
      tel: "Tel",
      fax: "Fax",
      email: "Email",
      mapLabel: "Northgo office map",
      mapError:
        "The map could not load. Office addresses and phone numbers are still listed below.",
      summary: (label: string, count: number) =>
        `${label} · ${count} offices. Select a name to zoom the map.`
    },
    trust: {
      years: "Years in logistics",
      offices: "Global offices",
      support: "Dedicated support"
    },
    translationNotice:
      "Chinese translation for this section is in progress. The English source is shown below.",
    legalNote: "This legal page is published in English."
  },
  "zh-tw": {
    htmlLang: "zh-Hant",
    skip: "跳至主要內容",
    nav: {
      services: "服務",
      about: "關於我們",
      contact: "聯絡我們",
      enquire: "立即詢價",
      getInTouch: "與我們聯絡",
      learnMore: "了解更多",
      menu: "選單",
      close: "關閉",
      language: "語系"
    },
    services: {
      freight: {
        name: "貨運物流",
        blurb: "海運、空運、陸運與報關的貨運承攬服務。"
      },
      project: {
        name: "專案物流",
        blurb: "超大件、重件與高價值專案貨物的門到門運送。"
      },
      warehouse: {
        name: "倉儲物流",
        blurb: "台中港彈性倉儲，支援離岸與大型專案。"
      },
      shipping: {
        name: "船務代理",
        blurb: "港口代理與船舶作業，從靠泊到船員協調。"
      }
    },
    footer: {
      company: "公司",
      services: "服務",
      legal: "法律",
      locations: "全球據點",
      privacy: "隱私權政策",
      terms: "服務條款",
      cookie: "Cookie 政策",
      disclaimer: "法律免責聲明",
      credit: "Strategy Creative",
      rights: "版權所有。"
    },
    form: {
      heading: "我們能如何協助？",
      firstName: "名字",
      lastName: "姓氏",
      company: "公司",
      email: "電子信箱",
      phone: "電話",
      country: "國家",
      countryPlaceholder: "請選擇…",
      services: "您有興趣的服務？",
      other: "其他",
      message: "訊息",
      messagePlaceholder: "請輸入訊息…",
      acceptTerms: "我同意",
      termsLink: "服務條款",
      submit: "送出",
      sending: "送出中…",
      success: "感謝您。我們已收到您的詢價。",
      error: "送出時發生問題，請再試一次。",
      required: "必填"
    },
    offices: {
      heading: "全球據點",
      intro:
        "Northgo 的辦公室網絡涵蓋台灣、日本、越南與美國，支援您的物流需求。",
      filterLabel: "區域",
      listHeading: "辦公室",
      hq: "總部",
      tel: "電話",
      fax: "傳真",
      email: "信箱",
      mapLabel: "Northgo 辦公室地圖",
      mapError: "地圖無法載入。下方仍列出各辦公室地址與電話。",
      summary: (label: string, count: number) =>
        `${label} · ${count} 個辦公室。點選名稱可在地圖上定位。`
    },
    trust: {
      years: "年物流經驗",
      offices: "全球據點",
      support: "專責支援"
    },
    translationNotice: "此段繁體中文翻譯進行中，以下先顯示英文原文。",
    legalNote: "本法律文件目前以英文發布。"
  }
} as const;

export function ui(locale: Locale) {
  return UI[locale];
}
