import { useParams } from "react-router-dom";
import { statisticsConstants } from "../assets/constants";
import { CardLayout } from "../components/ui/CardLayout";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import Calendar from "../components/ui/Calendar";

export const Statistics = () => {
  const { id } = useParams();
  const { habits } = useTypedSelector((state) => state.habits);
  const habit = habits.filter((habit) => habit.id === Number(id))[0];

  const percent = Math.ceil((habit.checkedDays.length / habit.repeat) * 100);

  const sectionStyle = `flex w-full flex-col px-6 pb-6`;
  const sectionTitleStyle = `uppercase text-sm font-medium`;

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
      <div className={`${sectionStyle} py-8 bg-${habit.color}`}>
        <span className={`${sectionTitleStyle}`}>
          {statisticsConstants.overview}
        </span>
        <div className="flex gap-6">
          <span className="text-6xl mt-1">{percent}%</span>
          <div>
            <div className={`text-base font-medium mt-1`}>
              {statisticsConstants.goal}: {habit.repeat} times
            </div>
            <div className={`text-base font-medium mt-3`}>
              {statisticsConstants.сompleted}: {habit.checkedDays.length} times
            </div>
          </div>
        </div>
      </div>

      <div className={sectionStyle}>
        <span className={`${sectionTitleStyle} pt-6`}>
          {statisticsConstants.history}
        </span>
      </div>

      <Calendar id={id} />
    </CardLayout>
  );
};
