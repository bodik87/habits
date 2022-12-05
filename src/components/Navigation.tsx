const Burger = () => {
  return (
    <div className="w-fit h-fit flex items-center justify-center cursor-pointer">
      <span className="block bg-myDark h-[2px] w-[30px] absolute top-0"></span>
      <span className="block bg-myDark h-[2px] w-[30px] absolute top-2.5"></span>
    </div>
  );
};

const Plus = () => {
  return (
    <div className="w-fit flex items-center justify-center cursor-pointer">
      <span className="block bg-myDark h-[2px] w-[25px] absolute top-0"></span>
      <span className="block bg-myDark h-[2px] w-[25px] rotate-90 absolute top-0"></span>
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className="px-8 my-5 flex justify-between relative">
      <Burger />
      <Plus />
    </div>
  );
};
