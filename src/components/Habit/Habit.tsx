import { eachDayOfInterval, format, startOfToday, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getDaysInterval } from "../../utils/getDaysInterval";
import { Checkbox } from "./ui/Checkbox";

export interface IHabit {
  color: string;
  title: string;
  goal: number;
  checkedDays: string[];
  id: number;
}

export const Habit = (props: IHabit) => {
  const navigate = useNavigate();
  const goToStatistics = (id: number) => navigate(`/statistics/${id}`);

  const { habits } = useTypedSelector((state) => state.habits);
  const habit = habits.filter((habit) => habit.id === Number(props.id))[0];

  const [goal, setGoal] = useState(props.goal);
  const [result, setResult] = useState(0);
  const [percent, setPercent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [circleDiameter, setCircleDiameter] = useState(0);

  const cardWidthRef = useRef<any>();
  const step = Math.ceil((cardWidth * 1.92) / goal);

  useEffect(() => {
    setGoal(props.goal);
    setResult(props.checkedDays.length);
    setPercent(Math.ceil((result / goal) * 100));
    setCardWidth(cardWidthRef.current.clientWidth);
    setCircleDiameter(step * result);
  }, [result, percent]);

  const setProgress = (boolean: boolean) => {
    if (boolean) {
      setResult(result + 1);
    } else {
      setResult(result - 1);
    }
  };

  const datesRow = getDaysInterval("yyyy-MM-dd");

  // Styles
  const habitWrapper =
    "h-28 max-w-[35rem] py-5 px-4 bg-myWhite rounded-xl relative overflow-hidden";
  const checkboxRowStyle = "flex w-[13rem] justify-between items-center z-10";
  const circleStyle =
    "absolute left-8 flex justify-center items-center rounded-full transition-all duration-500 z-0";
  const titleStyle = "absolute bottom-4 text-xl text-left z-10";
  const headStyle = "flex items-center h-[10px] mt-[6px] justify-end";

  return (
    <div
      ref={cardWidthRef}
      onClick={() => goToStatistics(props.id)}
      className={habitWrapper}
    >
      <div className={headStyle}>
        <div
          className={`${circleStyle} bg-${props.color}`}
          style={{
            width: `${circleDiameter}px`,
            height: `${circleDiameter}px`,
            marginLeft: `-${circleDiameter - circleDiameter / 2}px`,
          }}
        ></div>

        <span className="absolute left-5 font-medium">{percent}%</span>

        <div onClick={(e) => e.stopPropagation()} className={checkboxRowStyle}>
          {datesRow.map((date) => (
            <Checkbox
              key={date}
              id={habit.id}
              isChecked={habit.checkedDays.some((day) => day == date)}
              date={date}
              setProgress={setProgress}
            />
          ))}
        </div>
      </div>

      <div className={titleStyle}>
        {props.title.length > 28
          ? props.title.slice(0, 28) + "..."
          : props.title}
      </div>
    </div>
  );
};
