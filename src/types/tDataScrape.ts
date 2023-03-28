export interface ScrapedContent {
  byline: string;
  content: string;
  dir: string | null;
  excerpt: string | null;
  lang: string | null;
  length: string | null;
  siteName: string | null;
  textContent: string | null;
  title: string;
}

export interface DataScrape {
  content: ScrapedContent;
}
