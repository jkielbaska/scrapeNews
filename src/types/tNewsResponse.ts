export interface Source {
  id: string | null;
  name: string;
  description?: string | null;
  url?: string;
  category?: string | null;
  language?: string | null;
  country: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface CountryNewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface TopNewsResponse {
  status: string;
  sources: Source[];
}

export type Params = {
  kraj: string | string[] | undefined;
};
