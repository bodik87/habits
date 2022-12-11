import { goals, statisticsConstants } from "../../assets/constants";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

interface GoalProps {
  setGoal: (argument: number) => void;
  goal: number;
}

export const GoalSection = (props: GoalProps) => {
  return (
    <div className={`px-6 py-6 border-b border-black/10 flex flex-col gap-4`}>
      <span className="font-medium">{statisticsConstants.goal}</span>

      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-4 items-center mb-2">
          <span
            className="cursor-pointer"
            onClick={() => props.setGoal(props.goal - 1)}
          >
            <ArrowLeft />
          </span>
          <div className="flex flex-col items-center">
            <span className="font-medium text-xl">{props.goal}</span>
            <span className="text-base">times</span>
          </div>

          <span
            className="cursor-pointer"
            onClick={() => props.setGoal(props.goal + 1)}
          >
            <ArrowRight />
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        {goals.map((goalItem) => (
          <div
            key={goalItem}
            onClick={() => setGoal(goalItem)}
            className={`w-14 h-10 border-2 border-black/70 text-lg rounded-full flex justify-center  items-center cursor-pointer hover:brightness-105 transition-all duration-300`}
          >
            {goalItem}
          </div>
        ))}
      </div>
    </div>
  );
};
