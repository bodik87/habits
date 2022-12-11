import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

const checkedDays = [
  "2022-12-07",
  "2022-12-06",
  "2022-12-05",
  "2022-12-04",
  "2022-12-03",
];

let colStartClasses = [
  "col-start-7",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

interface ICalendarProps {
  id: any;
}

export default function Calendar({ id }: ICalendarProps) {
  const { habits } = useTypedSelector((state) => state.habits);
  const habit = habits.filter((habit) => habit.id === Number(id))[0];
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="px-6 mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={previousMonth} className="opacity-80">
          <ArrowLeft />
        </button>
        <span className="text-xl font-semibold">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </span>
        <button onClick={nextMonth} className="opacity-80">
          <ArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-7 mt-6 -mx-4 text-xs font-semibold text-center">
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div>
      </div>

      <div className="grid grid-cols-7 mt-2 -mx-4">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={`${
              dayIdx === 0 && colStartClasses[getDay(day)]
            } mx-auto`}
          >
            {habit.checkedDays.some((date) =>
              isSameDay(parseISO(date), day)
            ) ? (
              <div
                className={`${
                  isToday(day) && "text-red-500 font-bold"
                } w-10 h-10 rounded-full flex justify-center items-center border-2 border-myRed`}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </div>
            ) : (
              <div
                className={`${
                  isToday(day) && "text-red-500 font-semibold"
                } w-10 h-10 rounded-full flex justify-center items-center`}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
