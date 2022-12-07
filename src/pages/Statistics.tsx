import { useParams } from "react-router-dom";
import { statisticsConstants } from "../assets/constants";
import Calendar from "../components/ui/Calendar";
import { CardLayout } from "../components/ui/CardLayout";
import { useTypedSelector } from "../components/hooks/useTypedSelector";

// import { cards } from "../data";

export const Statistics = () => {
  const { id } = useParams();
  const { habits } = useTypedSelector((state) => state.habits);

  const habitTitle = habits.filter((habit) => habit.id === Number(id))[0];

  return (
    <CardLayout
      rightLinkText={statisticsConstants.rightBtn}
      leftLinkText={statisticsConstants.leftBtn}
      leftOnClick="/"
      rightOnClick={`/edit/${id}`}
      title={
        habitTitle.title.length > 28
          ? habitTitle.title.slice(0, 28) + "..."
          : habitTitle.title
      }
      habitColor={statisticsConstants.defaultColor}
    >
      <div
        className={`flex w-full flex-col bg-${statisticsConstants.defaultColor} px-8 pt-8 pb-4`}
      >
        <span className="uppercase text-sm">
          {statisticsConstants.habitName}
        </span>
      </div>
      <Calendar />
    </CardLayout>
  );
};
