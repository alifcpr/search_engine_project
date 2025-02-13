import { useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { getSuggestionsApi } from "@/services/search.services";
import { Link } from "react-router-dom";
import useClickOutside from "@/hooks/useClickOutside";
import { TSuggestion } from "@/types";
import { useSearch } from "@/providers/SearchProvider";
import { v4 as uuidv4 } from "uuid";

interface SearchSuggestionsProps {
  containerClassName?: string;
  suggestionCartClassName?: string;
}

const SearchSuggestionsBox = ({
  containerClassName,
  suggestionCartClassName,
}: SearchSuggestionsProps) => {
  // input state and suggestion box state
  const { value, isOpen, setIsOpen, setValue } = useSearch();

  // list of suggestions state
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);

  // box ref
  const ref = useClickOutside(setIsOpen);

  // debounce function for call api
  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (value.length > 0) {
        const handleCallApi = async () => {
          const data = await getSuggestionsApi(value);
          setSuggestions(data);
        };
        handleCallApi();
      }
    }, 300);
    return () => clearTimeout(debounceFn);
  }, [value]);

  // reset suggestions state when input value is 0
  useEffect(() => {
    if (value.length === 0) {
      setSuggestions([]);
    }
  }, [value]);

  // highlight search value in suggestion list
  const highlightText = (text: string, highlight: string) => {
    const splittedText = text.split(new RegExp(`(${highlight})`, "gi"));
    return splittedText.map((part: string) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={uuidv4()} className="font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  // setValue for input and close after that
  const handleCloseBox = (text: string) => {
    setValue(text);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className={tw(
        `w-full bg-white absolute top-16 rounded-md p-3 transition-all duration-300 ${containerClassName} ${
          isOpen && suggestions.length > 0
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`
      )}
    >
      <ul>
        {suggestions.map((item) => (
          <li
            key={uuidv4()}
            className={tw(
              `rounded-md w-full body-sm md:body-md hover:bg-slate-100 cursor-pointer ${suggestionCartClassName}`
            )}
          >
            <Link
              to={`/search?q=${item.phrase}`}
              className="py-2 px-3 block w-full"
              onClick={() => handleCloseBox(item.phrase)}
            >
              {highlightText(item.phrase, value)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestionsBox;
