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

  function closeSettings() {
    setVisibleSettings(false);
  }

  const handleClick = (event: any) => event.stopPropagation();

  return (
    <>
      {location.pathname === "/" && (
        <div className="fixed w-full left-0 right-0 bg-white/60 border-t-2 backdrop-blur-md bottom-0 h-14 z-20">
          <div className="flex justify-between items-center max-w-[43rem] mx-auto h-14 px-8 md:px-[4.5rem]">
            <div onClick={toggleSettings}>
              <Burger />
            </div>

            {location.pathname === "/" ? <Plus /> : null}
          </div>
        </div>
      )}

      <div
        onClick={closeSettings}
        className={`${
          visibleSettings ? "block" : "hidden"
        } max-w-[43rem] mx-auto px-4 bg-white/10 absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm`}
      >
        <div
          onClick={handleClick}
          className="bg-slate-300 px-8 pt-10 pb-24 rounded-t-3xl fixed bottom-0 z-10 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            <div
              className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
              onClick={() => console.log("Sort")}
            >
              Sort by name | date
            </div>

            <div
              className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
              onClick={resetAll}
            >
              RESET ALL 😨
            </div>

            <div
              className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
              onClick={() => console.log("Dark Theme")}
            >
              Dark Theme
            </div>

            <div
              className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
              onClick={() => console.log("Dark Theme")}
            >
              <a href="https://bodik87.github.io/index.html" target="_blank">
                To my portfolio 😊
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
