export const Burger = () => {
  const spanStyle = "bg-myDark h-[2px] w-[2rem]";

  return (
    <div className="w-[2rem] h-[2rem] flex flex-col gap-2 items-center justify-center cursor-pointer">
      <span className={spanStyle}></span>
      <span className={spanStyle}></span>
    </div>
  );
};
