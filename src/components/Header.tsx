const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function addLeadingZero(date: number) {
  return date < 10 ? "0" + date : date;
}

let today_index = (6 + new Date().getDay()) % 7;
days[today_index] = `${days[today_index]} `;
console.log(days.sort((a, b) => (a > b ? -1 : 1)));

function getUserTime(time: any, index: number) {
  // let Y = time.getFullYear();
  // let M = addLeadingZero(time.getMonth() + 1);
  let date = addLeadingZero(time.getDate() - index);
  let day = days[time.getDay() - index];
  return { day, date };
}

type Day = {
  day: string;
  date: any;
};

interface DateGroupProps {
  day: string;
  date: any;
}

const DateGroup = ({ day, date }: DateGroupProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[0.9rem] font-medium leading-none">{date}</p>
      <p className="text-[0.7rem] font-medium leading-none">{day}</p>
    </div>
  );
};

export const Header = () => {
  const today = getUserTime(new Date(Date.now()), 0);
  const today2 = getUserTime(new Date(Date.now()), 1);

  return (
    <div className="sticky max-w-[43rem] mx-auto bg-white/60 backdrop-blur-md top-0 h-28 z-20 px-8 md:px-[4.5rem] flex justify-between items-center">
      <p className=" font-medium text-3xl">Habit</p>
      <div className="flex w-[12rem] justify-between">
        <DateGroup day={today.day} date={today.date} />
        <DateGroup day={today2.day} date={today2.date} />
        <DateGroup day={today.day} date={today.date} />
        <DateGroup day={today.day} date={today.date} />
        <DateGroup day={today.day} date={today.date} />
      </div>
    </div>
  );
};
