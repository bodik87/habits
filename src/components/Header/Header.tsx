import { getDaysInterval } from "../../utils/getDaysInterval";
import { DateGroup } from "./DateGroup";

export const Header = () => {
  const datesRow = getDaysInterval("dd-eee");
  const headerWrapperStyle =
    "sticky max-w-[40rem] h-28 top-0 px-8 md:px-14 mx-auto flex justify-between items-center bg-white/60 backdrop-blur-md z-30";

  return (
    <div
      className={`${headerWrapperStyle} dark:bg-transparent dark:text-myWhite`}
    >
      <p className="font-medium text-3xl">Habit</p>
      <div className="flex w-[13rem] justify-between">
        {datesRow.map((item, i) => (
          <DateGroup key={item} day={item} date={item} index={i} />
        ))}
      </div>
    </div>
  );
};
