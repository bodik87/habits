import { CardLayout } from "../components/ui/CardLayout";
import {
  createConstants,
  goals,
  statisticsConstants,
} from "../assets/constants";
import { useEffect, useRef, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Create = () => {
  const ref = useRef<any>();
  const location = useLocation();
  const [habitColor, setHabitColor] = useState(createConstants.defaultColor);
  const [titleValue, setTitleValue] = useState("");
  const [goal, setGoal] = useState(7);

  const { habits } = useTypedSelector((state) => state.habits);
  const { addHabit } = useActions();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const createNewHabit = (): any => {
    return {
      id: habits.length + 1,
      title: titleValue,
      color: habitColor,
      goal: goal,
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
      leftLinkText={
        location.pathname === "/create/colors"
          ? "Back"
          : createConstants.leftBtn
      }
      leftLinkPath={location.pathname === "/create/colors" ? "/create" : "/"}
      rightLinkPath="/"
      title={createConstants.title}
      habitColor={`bg-${habitColor}`}
      rightBtnFunction={onClick}
    >
      {location.pathname === "/create/colors" ? (
        <Outlet context={{ setHabitColor }} />
      ) : (
        <>
          <div
            className={`flex w-full flex-col bg-${habitColor} px-8 pt-10 pb-4`}
          >
            <span className="uppercase text-sm font-medium">
              {createConstants.habitTitle}
            </span>
            <input
              ref={ref}
              className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder={createConstants.inputTitlePlaceholder}
            />
          </div>

          <div
            className={`px-6 py-6 border-b border-black/10 flex flex-col gap-4`}
          >
            <span className="font-medium">{statisticsConstants.goal}</span>

            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-4 items-center mb-2">
                <span
                  className="cursor-pointer"
                  onClick={() => setGoal(goal - 1)}
                >
                  <svg
                    className="opacity-70"
                    width="21.213203"
                    height="21.213196"
                    viewBox="0 0 21.2132 21.2132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.12133 8.48528L12.0208 18.3848C12.4113 18.7753 12.4113 19.4085 12.0208 19.799L11.3137 20.5061C10.9232 20.8966 10.29 20.8966 9.8995 20.5061L7.62939e-06 10.6066L2.12133 8.48528Z"
                      fillRule="evenodd"
                      fill="#050505"
                    />
                    <path
                      d="M3.8147e-06 10.6066L9.8995 0.707108C10.29 0.316574 10.9232 0.316574 11.3137 0.707108L12.0208 1.41422C12.4113 1.80473 12.4113 2.4379 12.0208 2.82843L2.12132 12.7279L3.8147e-06 10.6066Z"
                      fillRule="evenodd"
                      fill="#050505"
                    />
                  </svg>
                </span>
                <span className="font-medium text-xl">{goal} times</span>
                <span
                  className="cursor-pointer"
                  onClick={() => setGoal(goal + 1)}
                >
                  <svg
                    className="opacity-70"
                    width="21.213203"
                    height="21.213196"
                    viewBox="0 0 21.2132 21.2132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0919 12.7279L9.19238 2.82841C8.80186 2.43788 8.80186 1.80472 9.19238 1.4142L9.89949 0.707092C10.29 0.316559 10.9232 0.316559 11.3137 0.707092L21.2132 10.6066L19.0919 12.7279Z"
                      fillRule="evenodd"
                      fill="#050505"
                    />
                    <path
                      d="M21.2132 10.6066L11.3137 20.5061C10.9232 20.8966 10.29 20.8966 9.89949 20.5061L9.19239 19.799C8.80186 19.4085 8.80186 18.7753 9.19239 18.3848L19.0919 8.48528L21.2132 10.6066Z"
                      fillRule="evenodd"
                      fill="#050505"
                    />
                  </svg>
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

          {/* color */}

          <div
            className={`flex w-full flex-col px-8 py-4 border-b border-black/10`}
          >
            <Link to="/create/colors">
              <div className="flex justify-between items-center h-10">
                <span>{createConstants.chooseColor}</span>
                <span
                  className={`w-10 h-10 rounded-full flex justify-center items-center bg-${habitColor} cursor-pointer hover:scale-105 transition-all duration-200`}
                ></span>
              </div>
            </Link>
          </div>
        </>
      )}
    </CardLayout>
  );
};
