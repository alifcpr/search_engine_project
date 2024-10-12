import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

interface TSearchContext {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchContext = createContext<TSearchContext>({} as TSearchContext);

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  // params
  const [params] = useSearchParams();

  // input state
  const [value, setValue] = useState<string>(params.get("q") ?? "");
  // suggestion box state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ value, setValue, isOpen, setIsOpen }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a provider");
  }
  return context;
};

export { useSearch };
export default SearchProvider;
