import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const useClickOutside = (setValue: Dispatch<SetStateAction<boolean>>) => {
  // ref
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // when click outside the element set value to false
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setValue(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useClickOutside;
