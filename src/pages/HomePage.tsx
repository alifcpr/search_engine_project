import SearchSuggestionsBox from "@/components/search/SearchSuggestionBox";
import SearchBox from "@/components/search/SerachBox";
import useTitle from "@/hooks/useTitle";
import SearchProvider from "@/providers/SearchProvider";

const HomePage = () => {
  // page title
  useTitle("صفحه جستجو");

  return (
    <div className="w-screen h-screen bg-slate-200 flex  gap-y-3 items-center justify-center">
      <div className="-mt-72 relative w-full max-w-xs md:max-w-md lg:max-w-2xl flex flex-col gap-y-4">
        <SearchProvider>
          <h1 className="h5-bold text-center md:h4-bold lg:h3-bold">
            جستجویار
          </h1>
          <SearchBox />
          <SearchSuggestionsBox containerClassName="top-32" />
        </SearchProvider>
      </div>
    </div>
  );
};

export default HomePage;
