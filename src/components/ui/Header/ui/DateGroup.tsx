interface DateGroupProps {
  day: string;
  date: string;
  index: number;
}

export const DateGroup = ({ day, date, index }: DateGroupProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${
          index === 4
            ? "text-myDark font-semibold"
            : "text-black/70 font-medium"
        }`}
      >
        {date.slice(0, 2)}
      </div>
      <div
        className={`${
          index === 4
            ? "text-myDark font-semibold"
            : "text-black/70 font-medium"
        } text-[0.8rem]`}
      >
        {day.slice(-3)}
      </div>
    </div>
  );
};
