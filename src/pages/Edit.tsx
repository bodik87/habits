import { useNavigate, useParams } from "react-router-dom";
import { CardLayout } from "../components/ui/CardLayout";
import {
  createConstants,
  editConstants,
  goals,
  statisticsConstants,
} from "../assets/constants";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useState } from "react";
import { colors } from "../assets/constants";
import { ArrowRight } from "../components/ui/ArrowRight";
import { ArrowLeft } from "../components/ui/ArrowLeft";

export const Edit = () => {
  const { habits } = useTypedSelector((state) => state.habits);
  const { id } = useParams();
  const habit = habits.filter((habit) => habit.id === Number(id))[0];
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const { deleteHabit, updateHabit } = useActions();

  const [titleValue, setTitleValue] = useState(habit.title);
  const [habitColor, setHabitColor] = useState(habit.color);
  const [goal, setGoal] = useState(habit.goal);

  const handleClick = (id: any) => {
    deleteHabit(Number(id));
    goHome();
  };

  const sectionStyle = `flex w-full flex-col px-4 pb-6`;

  const clickHandler = (text: string) => {
    setHabitColor(text);
  };

  const updateCurrentHabit = (): any => {
    return {
      id: habit.id,
      title: titleValue,
      color: habitColor,
      goal: goal,
    };
  };

  const updatedHabit = updateCurrentHabit();

  const onClick = () => {
    if (titleValue.trim().length) {
      updateHabit(updatedHabit);
    }
  };

  return (
    <CardLayout
      rightLinkText={editConstants.rightBtn}
      leftLinkText={editConstants.leftBtn}
      leftLinkPath={`/statistics/${id}`}
      rightLinkPath="/"
      title={
        habit.title.length > 20 ? habit.title.slice(0, 20) + "..." : habit.title
      }
      habitColor={`bg-${habitColor}`}
      rightBtnFunction={onClick}
    >
      <div className={`flex w-full flex-col bg-${habitColor} px-6 py-8 pb-6`}>
        <span className="text-base">{editConstants.rename}</span>
        <input
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          className="bg-transparent placeholder:text-black/30 text-2xl outline-none mt-2"
          placeholder={editConstants.inputTitlePlaceholder}
        />
      </div>

      <div className={`px-6 py-6 border-b border-black/10 flex flex-col gap-4`}>
        <span className="font-medium">{statisticsConstants.goal}</span>

        <div className="flex items-center gap-2">
          <div className="flex gap-4 items-center mb-2">
            <span className="cursor-pointer" onClick={() => setGoal(goal - 1)}>
              <ArrowLeft />
            </span>
            <span className="font-medium text-xl">{goal} times</span>
            <span className="cursor-pointer" onClick={() => setGoal(goal + 1)}>
              <ArrowRight />
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          {goals.map((goalItem) => (
            <div
              key={goalItem}
              onClick={() => setGoal(goalItem)}
              className={`w-14 h-10 text-lg rounded-full flex justify-center bg-${habitColor} items-center cursor-pointer hover:brightness-105 transition-all duration-300`}
            >
              {goalItem}
            </div>
          ))}
        </div>
      </div>

      <div className={`px-6 py-6 border-b border-black/10`}>
        <div className="mb-4 font-medium">{createConstants.chooseColor}</div>

        <div className="flex justify-between">
          {colors.map((color) => (
            <span
              key={color}
              onClick={() => clickHandler(color)}
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-${color} cursor-pointer hover:scale-105 transition-all duration-200`}
            ></span>
          ))}
        </div>
      </div>

      <div className={sectionStyle}>
        <button
          className={`text-xl text-center pt-6 text-myRed`}
          onClick={() => handleClick(id)}
        >
          {editConstants.deleteHabit}
        </button>
      </div>
    </CardLayout>
  );
};
