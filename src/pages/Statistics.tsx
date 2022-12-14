import { useParams } from "react-router-dom";
import {
  sectionStyle,
  sectionTitleStyle,
  statisticsConstants,
} from "../assets/constants";
import { CardLayout } from "../components/ui/CardLayout";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Calendar from "../components/ui/Calendar";

export const Statistics = () => {
  const { id } = useParams();
  const { habits } = useTypedSelector((state) => state.habits);
  const habit = habits.filter((habit) => habit.id === Number(id))[0];

  const percent = Math.ceil((habit.checkedDays.length / habit.goal) * 100);

  return (
    <CardLayout
      rightLinkText={statisticsConstants.rightBtn}
      leftLinkText={statisticsConstants.leftBtn}
      leftLinkPath="/"
      rightLinkPath={`/edit/${id}`}
      title={
        habit.title.length > 18 ? habit.title.slice(0, 18) + "..." : habit.title
      }
      habitColor={`bg-${habit.color}`}
    >
      <div
        className={`${sectionStyle} py-8 bg-${habit.color} md:rounded-b-2xl`}
      >
        <span className={`${sectionTitleStyle}`}>
          {statisticsConstants.overview}
        </span>
        <div className="flex gap-6">
          <span className="text-6xl mt-1">{percent}%</span>
          <div>
            <div className={`text-base font-medium mt-1`}>
              {statisticsConstants.goal}: {habit.goal} times
            </div>
            <div className={`text-base font-medium mt-3`}>
              {statisticsConstants.сompleted}: {habit.checkedDays.length} times
            </div>
          </div>
        </div>
      </div>

      <div className={sectionStyle}>
        <span className={`${sectionTitleStyle} pt-6 dark:text-myWhite`}>
          {statisticsConstants.history}
        </span>
      </div>

      <Calendar id={id} />
    </CardLayout>
  );
};
