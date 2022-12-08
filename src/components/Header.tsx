import { eachDayOfInterval, format, startOfToday, subDays } from "date-fns";

interface DateGroupProps {
  day: string;
  date: string;
}

let daysInterval = eachDayOfInterval({
  start: subDays(startOfToday(), 4),
  end: startOfToday(),
});

let datesRow: string[] = [];
daysInterval.reverse().forEach((day) => {
  datesRow.push(format(day, "MM-ee"));
});

const DateGroup = ({ day, date }: DateGroupProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-medium leading-none">{date}</div>
      <div className="text-[0.8rem] font-medium leading-none">{day}</div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="sticky max-w-[43rem] mx-auto bg-white/60 backdrop-blur-md top-0 h-28 z-20 px-8 md:px-[4.5rem] flex justify-between items-center">
      <p className=" font-medium text-3xl">Habit</p>
      <div className="flex w-[13rem] justify-between">
        {datesRow.map((date) => (
          <DateGroup key={date} day={date.split(0, 2)} date={date.split(-2)} />
        ))}
      </div>
    </div>
  );
};
