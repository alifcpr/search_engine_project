import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const SearchPageLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SearchPageLayout;
