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
      <div className={`flex w-full flex-col bg-${habitColor} px-8 pt-8 pb-4`}>
        <span className="uppercase text-sm">{createConstants.habitName}</span>
        <input
          className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          placeholder={createConstants.inputNamePlaceholder}
        />
      </div>
    </CardLayout>
  );
};
