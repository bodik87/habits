import { CardLayout } from "../components/ui/CardLayout";
import { createConstants } from "../assets/constants";
import { useState } from "react";
import { useActions } from "../components/hooks/useActions";
import { useTypedSelector } from "../components/hooks/useTypedSelector";

export const Create = () => {
  const [habitColor, setHabitColor] = useState(createConstants.defaultColor);
  const [titleValue, setTitleValue] = useState("");
  const { habits } = useTypedSelector((state) => state.habits);
  const { addHabit } = useActions();

  const createNewHabit = (): any => {
    return {
      id: habits.length + 1,
      title: titleValue,
      color: habitColor,
      repeat: 10,
      checkedDays: [],
    };
  };

  const newHabit = createNewHabit();

  const onClick = () => {
    if (titleValue.trim().length) addHabit(newHabit);
  };

  return (
    <CardLayout
      rightLinkText={titleValue.trim().length ? createConstants.rightBtn : ""}
      leftLinkText={createConstants.leftBtn}
      leftLinkPath="/"
      rightLinkPath="/"
      title={createConstants.title}
      habitColor={`bg-${habitColor}`}
      rightBtnFunction={onClick}
    >
      <div className={`flex w-full flex-col bg-${habitColor} px-8 pt-10 pb-4`}>
        <span className="uppercase text-sm font-bold">
          {createConstants.habitTitle}
        </span>
        <input
          className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          placeholder={createConstants.inputTitlePlaceholder}
        />
      </div>
      <div
        className={`flex w-full flex-col px-8 py-4 border-b border-black/10`}
      >
        <div className="flex justify-between items-center h-10">
          <span>{createConstants.repeat}</span>
        </div>
      </div>
      <div
        className={`flex w-full flex-col px-8 py-4 border-b border-black/10`}
      >
        <div className="flex justify-between items-center h-10">
          <span>{createConstants.chooseColor}</span>
          <span
            className={`w-10 h-10 rounded-full flex justify-center items-center bg-${habitColor}`}
          ></span>
        </div>
      </div>
    </CardLayout>
  );
};
