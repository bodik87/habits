interface DateGroupProps {
  day: string;
  date: string;
  index: number;
}

export const DateGroup = (props: DateGroupProps) => {
  const currentDayStyle = "text-myDark font-semibold";
  const previousDaysStyle = "text-black/70 font-medium";
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${
          props.index === 4 ? `${currentDayStyle}` : `${previousDaysStyle}`
        }`}
      >
        {props.date.slice(0, 2)}
      </div>
      <div
        className={`${
          props.index === 4 ? `${currentDayStyle}` : `${previousDaysStyle}`
        } text-[0.8rem]`}
      >
        {props.day.slice(-3)}
      </div>
    </div>
  );
};
