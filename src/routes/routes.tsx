import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const SearchPage = lazy(() => import("@/pages/search/SearchPage"));
const SearchPageLayout = lazy(() => import("@/layouts/SearchPageLayout"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense>
        <SearchPageLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/search",
        element: (
          <Suspense>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
