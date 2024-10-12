import { memo } from "react";
import { twMerge as tw } from "tailwind-merge";


const LinksLoading = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {Array.from({ length: 7 }).map((_) => (
        <>
          <div
            className={tw(
              `w-[200px] md:w-[300px] h-[20px] rounded-sm bg-slate-200 animate-loading-animate`
            )}
          ></div>
          <div className="w-[300px] md:w-[500px] h-[40px] rounded-sm bg-slate-200 animate-loading-animate"></div>
        </>
      ))}
    </div>
  );
};

export default memo(LinksLoading);
