import { TSerachResultResponse, TSuggestion } from "@/types";
import axios from "axios";

export const getSuggestionsApi = async (query: string) => {
  try {
    const { data } = await axios.get<TSuggestion[]>(`
          https://duckduckgo.com/ac/?q=${query}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSearchResultsApi = async (query: string) => {
  try {
    const { data } = await axios.get<TSerachResultResponse>(`
    https://api.duckduckgo.com/?q=${decodeURIComponent(
      query
    )}&format=json&no_html=1&skip_disamig=1
    `);
    return data;
  } catch (error) {
    throw error;
  }
};
