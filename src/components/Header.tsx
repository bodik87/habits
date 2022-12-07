const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function addLeadingZero(date: number) {
  return date < 10 ? "0" + date : date;
}

let today_index = (6 + new Date().getDay()) % 7;
days[today_index] = `${days[today_index]} `;
// console.log(days.sort((a, b) => (a > b ? -1 : 1)));

function getUserTime(time: any, index: number) {
  // let Y = time.getFullYear();
  // let M = addLeadingZero(time.getMonth() + 1);
  let date = addLeadingZero(time.getDate() - index);
  let day = days[time.getDay() - index];
  return { day, date };
}

///
const datesRow = [
  { day: "MON", date: "07" },
  { day: "TUE", date: "06" },
  { day: "WED", date: "05" },
  { day: "FRI", date: "04" },
  { day: "SAT", date: "03" },
];

///////////////////////////////////////

interface DateGroupProps {
  day: string;
  date: any;
}

const DateGroup = ({ day, date }: DateGroupProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[0.9rem] font-medium leading-none">{date}</div>
      <div className="text-[0.7rem] font-medium leading-none">{day}</div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="sticky max-w-[43rem] mx-auto bg-white/60 backdrop-blur-md top-0 h-28 z-20 px-8 md:px-[4.5rem] flex justify-between items-center">
      <p className=" font-medium text-3xl">Habit</p>
      <div className="flex w-[12rem] justify-between">
        {datesRow.map((date) => (
          <DateGroup key={date.day} day={date.day} date={date.date} />
        ))}
      </div>
    </div>
  );
};
