import { useNavigate, useParams } from "react-router-dom";
import { CardLayout } from "../components/ui/CardLayout";
import { createConstants, editConstants } from "../assets/constants";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import { useActions } from "../components/hooks/useActions";
import { useState } from "react";
import { colors } from "../assets/constants";

export const Edit = () => {
  const { deleteHabit } = useActions();
  const { habits } = useTypedSelector((state) => state.habits);
  const { id } = useParams();
  const habit = habits.filter((habit) => habit.id === Number(id))[0];
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const [titleValue, setTitleValue] = useState(habit.title);
  const [habitColor, setHabitColor] = useState(habit.color);

  const handleClick = (id: any) => {
    deleteHabit(Number(id));
    goHome();
  };

  const sectionStyle = `flex w-full flex-col px-4 pb-6`;
  const sectionTitleStyle = `uppercase text-sm font-medium`;

  const clickHandler = (text: string) => {
    setHabitColor(text);
    // navigate(-1);
  };

  return (
    <CardLayout
      rightLinkText={editConstants.rightBtn}
      leftLinkText={editConstants.leftBtn}
      leftLinkPath={`/statistics/${id}`}
      rightLinkPath=""
      title={
        habit.title.length > 18 ? habit.title.slice(0, 18) + "..." : habit.title
      }
      habitColor={`bg-${habitColor}`}
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
      <div className={`px-6 py-6 border-b border-black/10`}>
        <div className="mb-4">{createConstants.chooseColor}</div>
        <div className="flex justify-between">
          {colors.map((color) => (
            <span
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
