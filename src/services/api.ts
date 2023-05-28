import axios from "axios";
import { TopNewsResponse, CountryNewsResponse } from "@/types/tNewsResponse";

const apiBase = "https://newsapi.org/v2";
const APIKEY = process.env.API_KEY;

export const api = axios.create({
  baseURL: apiBase,
  params: {
    apiKey: APIKEY,
  },
});

export const getTopNews = async () => {
  try {
    const response = await api.get<TopNewsResponse>("/top-headlines/sources?");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryNews = async (
  country: string | undefined | string[]
) => {
  try {
    const response = await api.get<CountryNewsResponse>(
      `/top-headlines?country=${country}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
