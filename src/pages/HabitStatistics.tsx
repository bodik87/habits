import { useParams } from "react-router-dom";
import { statisticsConstants } from "../assets/constants";
import Calendar from "../components/ui/Calendar";
import { CardLayout } from "../components/ui/CardLayout";
import { cards } from "../data";

export const HabitStatistics = () => {
  const { id } = useParams();
  const habitTitle = cards.filter((card) => card.id === Number(id))[0];

  return (
    <CardLayout
      rightLinkText={statisticsConstants.rightBtn}
      leftLinkText={statisticsConstants.leftBtn}
      leftOnClick="/"
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
