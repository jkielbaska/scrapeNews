import { type } from "os";

export interface Source {
  id: string | null;
  name: string;
  description?: string | null;
  url?: string | null;
  category?: string | null;
  language?: string | null;
  country?: string | null;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
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
