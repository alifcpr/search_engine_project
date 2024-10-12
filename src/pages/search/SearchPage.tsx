import { getSearchResultsApi } from "@/services/search.services";
import { TRelatedTopic } from "@/types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LinksLoading from "@/components/loading/LinksLoading";
import LinkCart from "@/components/carts/LinkCart";
import { v4 as uuidv4 } from "uuid";

const SearchPage = () => {
  // search params
  const [params] = useSearchParams();
  const searchQuery = params.get("q");

  // api data , loading , error state
  const [data, setData] = useState<TRelatedTopic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // call api
  useEffect(() => {
    const handleCallApi = async () => {
      setIsLoading(true);
      try {
        const response = await getSearchResultsApi(searchQuery!);
        setIsLoading(true);
        setData(response.RelatedTopics);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleCallApi();
  }, [searchQuery]);

  return (
    <div className="max-w-sm  mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px] 2xl:max-w-[1700px] px-2">
      <h1 className="body-md mt-4">نتایج جستجو برای : "{searchQuery}"</h1>
      <div className="mt-10">
        {isLoading && !isError && <LinksLoading />}
        {isError && !isLoading && (
          <p className="body-lg">بعدا تلاش کنید ، مشکلی به وجود آمده است</p>
        )}
        {!isLoading &&
          !isError &&
          data &&
          (data.length === 0 ? (
            <>
              <p className="body-lg">نتیجه ای برای {searchQuery} یافت نشد</p>
              <ul className="flex flex-col body-md mt-3 list-disc">
                <li>از کلمات دیگر استفاده کنید</li>
                <li>از کلمات کلیدی بیشتری استفاده کنید</li>
              </ul>
            </>
          ) : (
            <div className="flex flex-col gap-y-6">
              {data.map((item: TRelatedTopic) => (
                <LinkCart data={item} key={uuidv4()} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
