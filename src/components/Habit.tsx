import { eachDayOfInterval, format, startOfToday, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "./ui/Checkbox";

export interface IHabitProps {
  color: string;
  title: string;
  repeat: number;
  checked: number;
  id: number;
}

export const Habit = ({ color, title, repeat, checked, id }: IHabitProps) => {
  const [goal, setGoal] = useState(repeat);
  const [result, setResult] = useState(checked);
  const [circleDiameter, setCircleDiameter] = useState(0);
  const [percent, setPercent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cardWidthRef = useRef<any>();
  const step = Math.ceil((cardWidth * 1.85) / goal);

  const navigate = useNavigate();
  const goToStatistics = (id: number) => navigate(`/statistics/${id}`);
  const handleClick = (event: any) => event.stopPropagation();

  useEffect(() => {
    setGoal(repeat);
    setCardWidth(cardWidthRef.current.clientWidth);
    setPercent(Math.ceil((result / goal) * 100));
    setCircleDiameter(step * result);
  }, [result, percent]);

  const setProgress = (boolean: boolean) => {
    if (boolean) {
      setResult(result + 1);
    } else {
      setResult(result - 1);
    }
  };

  let daysInterval = eachDayOfInterval({
    start: subDays(startOfToday(), 4),
    end: startOfToday(),
  });

  let datesRow: string[] = [];
  daysInterval.reverse().forEach((day) => {
    datesRow.push(format(day, "yyyy-MM-dd"));
  });

  return (
    <div
      ref={cardWidthRef}
      onClick={() => goToStatistics(id)}
      className={`h-28 bg-myWhite py-5 px-4 rounded-xl relative overflow-hidden`}
    >
      <div className="flex items-center h-[10px] mt-[6px] justify-end">
        <div
          className={`bg-${color} left-8 flex justify-center items-center rounded-full absolute z-0`}
          style={{
            width: `${circleDiameter}px`,
            height: `${circleDiameter}px`,
            marginLeft: `-${circleDiameter - circleDiameter / 2}px`,
          }}
        ></div>
        <span className="font-semibold absolute left-5">{percent}%</span>

        <div
          onClick={handleClick}
          className="flex w-[13rem] justify-between items-center z-10"
        >
          {datesRow.map((date) => (
            <Checkbox
              key={date}
              isChecked={false}
              date={date}
              setProgress={setProgress}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 text-xl text-left z-10">
        {title.length > 40 ? title.slice(0, 40) + "..." : title}
      </div>
    </div>
  );
};
