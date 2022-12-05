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
    <div className="w-[1.8rem] h-[1.8rem] flex items-center justify-center cursor-pointer">
      <span className="bg-myDark h-[2px] w-[1.8rem]"></span>
      <span className="bg-myDark h-[2px] w-[1.8rem] rotate-90 absolute"></span>
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className="fixed w-full max-w-[55rem] mx-auto bg-white/50 backdrop-blur-md bottom-0 left-0 right-0 h-14 z-20 px-8 md:px-[4.5rem] flex justify-between items-center">
      <Burger />
      <Plus />
    </div>
  );
};
