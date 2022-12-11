import { CardLayout } from "../components/ui/CardLayout";
import { createConstants, sectionTitleStyle } from "../assets/constants";
import { useEffect, useRef, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GoalSection } from "../components/ui/GoalSection";

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
            className={`flex w-full flex-col items-center bg-${habitColor} py-8 pb-6 md:rounded-b-2xl`}
          >
            <span className={sectionTitleStyle}>
              {createConstants.habitTitle}
            </span>
            <input
              ref={ref}
              className="bg-white/50 px-4 py-2 rounded-lg w-fit text-center placeholder:text-black/30 text-2xl outline-none mt-2"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder={createConstants.inputTitlePlaceholder}
            />
          </div>

          <GoalSection goal={goal} setGoal={setGoal} />

          <div
            className={`flex w-full flex-col px-6 py-4 border-b border-black/10 dark:text-myWhite dark:border-white/10`}
          >
            <Link to="/create/colors">
              <div className="flex justify-between items-center h-10">
                <span className={sectionTitleStyle}>
                  {createConstants.chooseColor}
                </span>
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
