import type { Locale } from "../site";
import { en } from "./en";
import { zhTw } from "./zh-tw";

export const content = {
  en,
  "zh-tw": zhTw
} as const;

export function pageContent(locale: Locale) {
  return content[locale];
}

export type PageContent = ReturnType<typeof pageContent>;
