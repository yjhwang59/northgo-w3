export type Office = {
  id: string;
  hq?: boolean;
  regions: string[];
  name: { en: string; "zh-tw": string };
  short: { en: string; "zh-tw": string };
  area: { en: string; "zh-tw": string };
  address: { en: string; "zh-tw": string };
  tel: string;
  fax?: string;
  email: string;
  lat: number;
  lng: number;
};

export const OFFICES: Office[] = [
  {
    id: "tpe",
    hq: true,
    regions: ["tw", "apac"],
    name: { en: "Taipei Office (Head Office)", "zh-tw": "台北總部" },
    short: { en: "Taipei HQ", "zh-tw": "台北總部" },
    area: { en: "Taiwan", "zh-tw": "台灣" },
    address: {
      en: "7F., No. 10, Sec. 3, Minsheng E. Rd., Taipei City 104511, Taiwan",
      "zh-tw": "104511 台北市中山區民生東路三段 10 號 7 樓"
    },
    tel: "+886-2-2531-8677",
    fax: "+886-2-2531-8577",
    email: "info.tpe@northgo.com",
    lat: 25.0575827,
    lng: 121.5384048
  },
  {
    id: "txg",
    regions: ["tw", "apac"],
    name: { en: "Taichung Office", "zh-tw": "台中" },
    short: { en: "Taichung", "zh-tw": "台中" },
    area: { en: "Taiwan", "zh-tw": "台灣" },
    address: {
      en: "No. 4, Zhongheng 11th Rd., Taichung City 435058, Taiwan",
      "zh-tw": "435058 台中市梧棲區中橫十一路 4 號"
    },
    tel: "+886-4-2326-2580",
    fax: "+886-4-2326-0308",
    email: "info.txg@northgo.com",
    lat: 24.2712994,
    lng: 120.5311579
  },
  {
    id: "khh",
    regions: ["tw", "apac"],
    name: { en: "Kaohsiung Office", "zh-tw": "高雄" },
    short: { en: "Kaohsiung", "zh-tw": "高雄" },
    area: { en: "Taiwan", "zh-tw": "台灣" },
    address: {
      en: "19F-2, No.31 Hai-Pien Rd., Kaohsiung City 802609, Taiwan",
      "zh-tw": "802609 高雄市苓雅區海邊路 31 號 19 樓之 2"
    },
    tel: "+886-7-335-0730",
    fax: "+886-7-336-4536",
    email: "info.khh@northgo.com",
    lat: 22.6164858,
    lng: 120.2934556
  },
  {
    id: "tyo",
    regions: ["jp", "apac"],
    name: { en: "Tokyo Office", "zh-tw": "東京" },
    short: { en: "Tokyo", "zh-tw": "東京" },
    area: { en: "Japan", "zh-tw": "日本" },
    address: {
      en: "104-0041 6FL., Gran+Ginza-East 1-5-1 Shintomi, Chuo-Ku, Tokyo City, Japan",
      "zh-tw": "〒104-0041 日本東京都中央區新富 1-5-1 Gran+Ginza-East 6 樓"
    },
    tel: "+81-3-6260-3944",
    fax: "+81-3-6260-3945",
    email: "info.tyo@northgo.com",
    lat: 35.673107,
    lng: 139.773178
  },
  {
    id: "osa",
    regions: ["jp", "apac"],
    name: { en: "Osaka Office", "zh-tw": "大阪" },
    short: { en: "Osaka", "zh-tw": "大阪" },
    area: { en: "Japan", "zh-tw": "日本" },
    address: {
      en: "530-0002 3FL., MF Sakura-Bashi Build, 2-6-23 Sonezaki Shinchi, kita-ku, Osaka City, Japan",
      "zh-tw": "〒530-0002 日本大阪市北區曾根崎新地 2-6-23 MF Sakura-Bashi 大樓 3 樓"
    },
    tel: "+81-6-6676-8395",
    fax: "+81-6-6676-8397",
    email: "info.osa@northgo.com",
    lat: 34.697384,
    lng: 135.492676
  },
  {
    id: "hcmc",
    regions: ["sea", "apac"],
    name: { en: "Ho Chi Minh Office", "zh-tw": "胡志明市" },
    short: { en: "Ho Chi Minh", "zh-tw": "胡志明市" },
    area: { en: "Vietnam", "zh-tw": "越南" },
    address: {
      en: "5th Floor, No. 92D Nguyen Huu Canh Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam",
      "zh-tw": "越南胡志明市平盛郡第 22 坊阮有景路 92D 號 5 樓"
    },
    tel: "+84-28-9995-7368",
    email: "info.hcmc@northgo.com",
    lat: 10.7951391,
    lng: 106.7184626
  },
  {
    id: "lax",
    regions: ["na"],
    name: { en: "Los Angeles Office", "zh-tw": "洛杉磯" },
    short: { en: "Los Angeles", "zh-tw": "洛杉磯" },
    area: { en: "United States", "zh-tw": "美國" },
    address: {
      en: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA",
      "zh-tw": "91754 美國加州蒙特利公園市 South Atlantic Blvd 119 號 301 室"
    },
    tel: "+1-714-853-1088",
    email: "info.lax@northgo.com",
    lat: 34.0622117,
    lng: -118.1343114
  }
];

export const REGION_LABELS = {
  en: {
    world: "Worldwide",
    apac: "Asia Pacific",
    tw: "Taiwan",
    jp: "Japan",
    sea: "Southeast Asia",
    na: "North America"
  },
  "zh-tw": {
    world: "全球",
    apac: "亞太",
    tw: "台灣",
    jp: "日本",
    sea: "東南亞",
    na: "北美"
  }
} as const;
