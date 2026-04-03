import { createContext } from "react";

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);