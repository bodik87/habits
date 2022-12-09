import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Burger = () => {
  return (
    <div className="w-[2rem] h-[2rem] flex flex-col gap-2 items-center justify-center cursor-pointer">
      <span className="bg-myDark h-[2px] w-[2rem]"></span>
      <span className="bg-myDark h-[2px] w-[2rem]"></span>
    </div>
  );
};

const Plus = () => {
  return (
    <Link to={"/create"}>
      <div className="w-[1.8rem] h-[1.8rem] flex items-center justify-center cursor-pointer">
        <span className="bg-myDark h-[2px] w-[1.8rem]"></span>
        <span className="bg-myDark h-[2px] w-[1.8rem] rotate-90 absolute"></span>
      </div>
    </Link>
  );
};

export const Navigation = () => {
  const location = useLocation();
  const [visibleSettings, setVisibleSettings] = useState(false);

  function resetAll() {
    localStorage.clear();
    window.location.reload();
  }

  function toggleSettings() {
    setVisibleSettings(!visibleSettings);
  }

  return (
    <div className="fixed w-full left-0 right-0 bg-white/60 border-t-2 backdrop-blur-md bottom-0 h-14 z-20">
      <div className="flex justify-between items-center max-w-[43rem] mx-auto h-14 px-8 md:px-[4.5rem]">
        <div onClick={toggleSettings}>
          <Burger />
        </div>

        {location.pathname === "/" ? <Plus /> : null}
      </div>

      <div
        className={`${
          visibleSettings ? "block" : "hidden"
        } bg-slate-300 px-8 pt-14 pb-24 rounded-t-[3rem] w-full absolute bottom-0 left-0 -z-10`}
      >
        <div
          className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
          onClick={resetAll}
        >
          RESET ALL 😨
        </div>
      </div>
    </div>
  );
};
