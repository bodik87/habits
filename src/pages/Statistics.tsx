import { useParams } from "react-router-dom";
import { statisticsConstants } from "../assets/constants";
import { CardLayout } from "../components/ui/CardLayout";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import Calendar from "../components/ui/Calendar";

export const Statistics = () => {
  const { id } = useParams();
  const { habits } = useTypedSelector((state) => state.habits);
  const habit = habits.filter((habit) => habit.id === Number(id))[0];

  return (
    <CardLayout
      rightLinkText={statisticsConstants.rightBtn}
      leftLinkText={statisticsConstants.leftBtn}
      leftLinkPath="/"
      rightLinkPath={`/edit/${id}`}
      title={
        habit.title.length > 28 ? habit.title.slice(0, 28) + "..." : habit.title
      }
      habitColor={`bg-${habit.color}`}
    >
      <div className={`flex w-full flex-col bg-${habit.color} px-8 pt-8 pb-4`}>
        <span className="uppercase text-sm font-medium">
          {statisticsConstants.regularity}
        </span>
      </div>

      <div className={`flex w-full flex-col px-8 pt-8 pb-4`}>
        <span className="uppercase text-sm font-medium">
          {statisticsConstants.overview}
        </span>
      </div>

      <Calendar id={id} />
    </CardLayout>
  );
};
