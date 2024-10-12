import React, { memo } from "react";
import { twMerge as tw } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

const LinksLoading = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {Array.from({ length: 7 }).map((_) => (
        <React.Fragment key={uuidv4()}>
          <div
            className={tw(
              `w-[200px] md:w-[300px] h-[20px] rounded-sm bg-slate-200 animate-loading-animate`
            )}
          ></div>
          <div className="w-[300px] md:w-[500px] h-[40px] rounded-sm bg-slate-200 animate-loading-animate"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default memo(LinksLoading);
