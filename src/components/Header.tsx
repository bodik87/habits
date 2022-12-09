import { eachDayOfInterval, format, startOfToday, subDays } from "date-fns";

interface DateGroupProps {
  day: string;
  date: string;
  index: number;
}

const DateGroup = ({ day, date, index }: DateGroupProps) => {
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

export const Header = () => {
  let daysInterval = eachDayOfInterval({
    start: subDays(startOfToday(), 4),
    end: startOfToday(),
  });

  let datesRow: string[] = [];
  daysInterval.forEach((day) => {
    datesRow.push(String(format(day, "dd-eee")));
  });

  return (
    <div className="sticky max-w-[43rem] mx-auto bg-white/60 backdrop-blur-md top-0 h-28 z-10 px-8 md:px-[4.5rem] flex justify-between items-center">
      <p className=" font-medium text-3xl">Habit</p>
      <div className="flex w-[13rem] justify-between">
        {datesRow.map((item, i) => (
          <DateGroup key={item} day={item} date={item} index={i} />
        ))}
      </div>
    </div>
  );
};
