import SearchProvider from "@/providers/SearchProvider";
import SearchBox from "./search/SerachBox";
import SearchSuggestionsBox from "./search/SearchSuggestionBox";

const Header = () => {
  return (
    <div className="bg-slate-200 py-3">
      <div className="w-full flex flex-col gap-y-4 md:flex-row items-center justify-between max-w-sm  mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px] 2xl:max-w-[1700px]">
        <div className="relative">
          <SearchProvider>
            <SearchBox
              containerClassName="w-[300px] md:w-[400px] lg:w-[500px]"
              inputClassName="body-sm py-1"
              buttonClassName="[&>svg]:size-6 py-2"
            />
            <SearchSuggestionsBox
              containerClassName="bg-slate-100 shadow-lg"
              suggestionCartClassName="hover:bg-slate-200"
            />
          </SearchProvider>
        </div>
        <h1 className="h5-bold order-first md:order-last md:h4-bold">
          جستجویار
        </h1>
      </div>
    </div>
  );
};

export default Header;
