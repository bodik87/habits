import {
  goals,
  sectionTitleStyle,
  statisticsConstants,
} from "../../assets/constants";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

interface GoalProps {
  setGoal: (argument: number) => void;
  goal: number;
}

export const GoalSection = (props: GoalProps) => {
  return (
    <div className={`px-6 py-6 border-b border-black/10 flex flex-col gap-4`}>
      <span className={sectionTitleStyle}>{statisticsConstants.goal}</span>

      <div className="flex flex-col items-center mb-1">
        <div className="flex items-center justify-center gap-4 mb-1">
          <span
            className="cursor-pointer"
            onClick={() => props.setGoal(props.goal - 1)}
          >
            <ArrowLeft />
          </span>
          <span className="font-medium text-2xl leading-none">
            {props.goal}
          </span>
          <span
            className="cursor-pointer"
            onClick={() => props.setGoal(props.goal + 1)}
          >
            <ArrowRight />
          </span>
        </div>
        <span className="text-xs font-medium leading-none uppercase">
          times
        </span>
      </div>

      <div className="flex justify-between">
        {goals.map((goalItem) => (
          <div
            key={goalItem}
            onClick={() => props.setGoal(goalItem)}
            className={`w-14 h-10 border-2 border-black/70 text-lg rounded-full flex justify-center  items-center cursor-pointer hover:brightness-105 transition-all duration-300`}
          >
            {goalItem}
          </div>
        ))}
      </div>
    </div>
  );
};
