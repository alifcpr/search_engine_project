import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const SearchPageLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-sm  mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px] 2xl:max-w-[1700px]">
        <Outlet />
      </div>
    </>
  );
};

export default SearchPageLayout;
