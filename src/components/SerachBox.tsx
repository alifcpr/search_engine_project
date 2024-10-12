import { ChangeEvent, KeyboardEventHandler } from "react";
import { twMerge as tw } from "tailwind-merge";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearch } from "../providers/SearchProvider";

interface SearchBoxProps {
  inputClassName?: string;
  containerClassName?: string;
  buttonClassName?: string;
  autoFocus?: boolean;
}

const SearchBox = ({
  buttonClassName,
  containerClassName,
  inputClassName,
  autoFocus = false,
}: SearchBoxProps) => {
  // search box state
  const { value, setValue, isOpen, setIsOpen } = useSearch();

  // navigate hook
  const navigate = useNavigate();

  // change input state value
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isOpen) setIsOpen(true);
    if (e.target.value.length === 0) setIsOpen(false);
  };

  // handle redirect user to /search page
  const handleRedirectUser = () => {
    if (value.length === 0)
      return toast.error("You did not enter any text in the search!");
    navigate(`/search?q=${value}`);
  };

  // when user click on Enter button , call handleRedirectUser function
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleRedirectUser();
    }
  };

  return (
    <div
      className={tw(
        `w-full overflow-hidden transition-all bg-white focus-within:shadow-lg rounded-md flex items-center ${containerClassName}`
      )}
    >
      <input
        className={tw(
          `w-full py-3 px-2 outline-none body-md lg:body-lg ${inputClassName}`
        )}
        value={value}
        onChange={inputChangeHandler}
        onKeyDown={handleKeyDown}
        placeholder="جستجو"
        autoFocus={autoFocus}
      />
      <button
        onClick={handleRedirectUser}
        className={tw(
          `h-full py-2 w-16 flex transition-all duration-300 items-center justify-center [&>svg]:size-8  ${
            value.length > 0
              ? "bg-opacity-100 bg-blue-600 hover:bg-blue-700 pointer-events-auto [&>svg]:text-white"
              : "bg-opacity-0 [&>svg]:text-black pointer-events-none"
          } ${buttonClassName}`
        )}
      >
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBox;
