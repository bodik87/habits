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
    <div className="mt-1 px-6 mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={previousMonth} className="opacity-80">
          <span className="">
            <svg
              width="21.213203"
              height="21.213196"
              viewBox="0 0 21.2132 21.2132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.12133 8.48528L12.0208 18.3848C12.4113 18.7753 12.4113 19.4085 12.0208 19.799L11.3137 20.5061C10.9232 20.8966 10.29 20.8966 9.8995 20.5061L7.62939e-06 10.6066L2.12133 8.48528Z"
                fillRule="evenodd"
                fill="#050505"
              />
              <path
                d="M3.8147e-06 10.6066L9.8995 0.707108C10.29 0.316574 10.9232 0.316574 11.3137 0.707108L12.0208 1.41422C12.4113 1.80473 12.4113 2.4379 12.0208 2.82843L2.12132 12.7279L3.8147e-06 10.6066Z"
                fillRule="evenodd"
                fill="#050505"
              />
            </svg>
          </span>
        </button>
        <span className="text-xl font-semibold">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </span>
        <button onClick={nextMonth} className="opacity-80">
          <span className="">
            <svg
              width="21.213203"
              height="21.213196"
              viewBox="0 0 21.2132 21.2132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0919 12.7279L9.19238 2.82841C8.80186 2.43788 8.80186 1.80472 9.19238 1.4142L9.89949 0.707092C10.29 0.316559 10.9232 0.316559 11.3137 0.707092L21.2132 10.6066L19.0919 12.7279Z"
                fillRule="evenodd"
                fill="#050505"
              />
              <path
                d="M21.2132 10.6066L11.3137 20.5061C10.9232 20.8966 10.29 20.8966 9.89949 20.5061L9.19239 19.799C8.80186 19.4085 8.80186 18.7753 9.19239 18.3848L19.0919 8.48528L21.2132 10.6066Z"
                fillRule="evenodd"
                fill="#050505"
              />
            </svg>
          </span>
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
