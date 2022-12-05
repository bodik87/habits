const DateGroup = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[0.9rem] font-medium leading-none">15</p>
      <p className="text-[0.7rem] font-medium leading-none">MON</p>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="sticky bg-white/50 backdrop-blur-md top-0 h-20 z-20 px-4 flex justify-between items-center">
      <p className="font-medium text-3xl">Habit</p>
      <div className="flex w-[11rem] justify-between">
        <DateGroup />
        <DateGroup />
        <DateGroup />
        <DateGroup />
        <DateGroup />
      </div>
    </div>
  );
};
