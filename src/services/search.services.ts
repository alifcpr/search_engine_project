import { TSuggestion } from "@/types";
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
