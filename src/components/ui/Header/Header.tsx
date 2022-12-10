import { getDaysInterval } from "../../../utils/getDaysInterval";
import { DateGroup } from "./ui/DateGroup";

export const Header = () => {
  const datesRow = getDaysInterval();

  return (
    <div className="sticky max-w-[35rem] h-28 top-0 px-6 mx-auto flex justify-between items-center bg-white/60 backdrop-blur-md z-30">
      <p className="font-medium text-3xl">Habit</p>
      <div className="flex w-[13rem] justify-between">
        {datesRow.map((item, i) => (
          <DateGroup key={item} day={item} date={item} index={i} />
        ))}
      </div>
    </div>
  );
};
