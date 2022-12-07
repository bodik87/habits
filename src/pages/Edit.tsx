import { useParams } from "react-router-dom";
import { CardLayout } from "../components/ui/CardLayout";
import { editConstants } from "../assets/constants";
import { useState } from "react";
import { cards } from "../data";

export const Edit = () => {
  const { id } = useParams();
  const habitTitle = cards.filter((card) => card.id === Number(id))[0];

  const [habitColor, setHabitColor] = useState(editConstants.defaultColor);

  return (
    <CardLayout
      rightLinkText={editConstants.rightBtn}
      leftLinkText={editConstants.leftBtn}
      leftOnClick="/"
      rightOnClick=""
      title={habitTitle.title}
      habitColor={habitColor}
    >
      <div className={`flex w-full flex-col bg-${habitColor} px-8 pt-8 pb-4`}>
        <span className="uppercase text-sm">{editConstants.habitName}</span>
        <input
          className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
          // placeholder={editConstants.inputNamePlaceholder}
        />
      </div>
    </CardLayout>
  );
};
