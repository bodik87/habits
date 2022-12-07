import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    startDatetime: "2022-12-07T13:00",
    endDatetime: "2022-12-07T14:30",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    startDatetime: "2022-12-08T13:00",
    endDatetime: "2022-12-08T14:30",
  },
];

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default function Calendar() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
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

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className="pt-4 px-8 mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={previousMonth} className="opacity-80">
          <span className="">Prev</span>
        </button>
        <span className="text-xl">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </span>
        <button onClick={nextMonth} className="opacity-80">
          <span className="">Next</span>
        </button>
      </div>

      <div className="grid grid-cols-7 mt-4 text-xs font-semibold text-center">
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div>
      </div>

      <div className="grid grid-cols-7 mt-2">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={`${
              dayIdx === 0 && colStartClasses[getDay(day)]
            } mx-auto`}
          >
            {meetings.some((meeting) =>
              isSameDay(parseISO(meeting.startDatetime), day)
            ) ? (
              <div
                className={`${
                  isToday(day) && "text-red-500 font-semibold"
                } w-10 h-10 rounded-full flex justify-center items-center border-2 border-red-500`}
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
