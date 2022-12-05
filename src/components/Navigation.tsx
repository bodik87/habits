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
    <div className="">
      <div className="px-4 mt-4 mb-2 flex justify-between relative">
        <Burger />
        <Plus />
      </div>
    </div>
  );
};
