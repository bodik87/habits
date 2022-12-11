import { useNavigate, useParams } from "react-router-dom";
import { CardLayout } from "../components/ui/CardLayout";
import {
  createConstants,
  editConstants,
  sectionTitleStyle,
} from "../assets/constants";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useState } from "react";
import { colors } from "../assets/constants";
import { GoalSection } from "../components/ui/GoalSection";

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
      <div
        className={`flex w-full flex-col items-center bg-${habitColor} py-8 pb-6`}
      >
        <span className={sectionTitleStyle}>{editConstants.rename}</span>
        <input
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          className="bg-white/50 px-4 py-2 rounded-lg w-fit text-center placeholder:text-black/30 text-2xl outline-none mt-2"
          placeholder={editConstants.inputTitlePlaceholder}
        />
      </div>

      <GoalSection goal={goal} setGoal={setGoal} />

      <div className={`px-6 py-6 border-b border-black/10`}>
        <div className={sectionTitleStyle}>{createConstants.chooseColor}</div>

        <div className="flex justify-between mt-4">
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
