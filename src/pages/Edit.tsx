import { useParams } from "react-router-dom";
import { CardLayout } from "../components/ui/CardLayout";
import { editConstants } from "../assets/constants";
import { useState } from "react";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import { useActions } from "../components/hooks/useActions";
// import { cards } from "../data";

export const Edit = () => {
  const { deleteHabit } = useActions();
  const { habits } = useTypedSelector((state) => state.habits);

  const { id } = useParams();
  const habit = habits.filter((habit) => habit.id === Number(id))[0];
  console.log(habit.color);

  return (
    <CardLayout
      rightLinkText={editConstants.rightBtn}
      leftLinkText={editConstants.leftBtn}
      leftOnClick={`/statistics/${id}`}
      rightOnClick=""
      title={habit.title}
      habitColor={`bg-${habit.color}`}
    >
      <div className={`flex w-full flex-col bg-${habit.color} px-8 pt-8 pb-4`}>
        <span className="uppercase text-sm">{editConstants.habitName}</span>
        <input
          className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
          // placeholder={editConstants.inputNamePlaceholder}
        />
      </div>
    </CardLayout>
  );
};
