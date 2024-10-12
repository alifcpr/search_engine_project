import { useEffect } from "react";

const useTitle = (title: string) => {
  // change title of document
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
