import { CardLayout } from "../components/ui/CardLayout";
import { createConstants } from "../assets/constants";
import { useState } from "react";
import { useActions } from "../components/hooks/useActions";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Create = () => {
  const location = useLocation();
  const [habitColor, setHabitColor] = useState(createConstants.defaultColor);
  const [titleValue, setTitleValue] = useState("");
  const { habits } = useTypedSelector((state) => state.habits);
  const { addHabit } = useActions();

  const createNewHabit = (): any => {
    return {
      id: habits.length + 1,
      title: titleValue,
      color: habitColor,
      repeat: 10,
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
              className="bg-transparent placeholder:text-black/30 text-xl outline-none mt-2"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder={createConstants.inputTitlePlaceholder}
            />
          </div>
          <div
            className={`flex w-full flex-col px-8 py-4 border-b border-black/10`}
          >
            <div className="flex justify-between items-center h-10">
              <span>{createConstants.repeat}</span>
            </div>
          </div>
          <div
            className={`flex w-full flex-col px-8 py-4 border-b border-black/10`}
          >
            <div className="flex justify-between items-center h-10">
              <span>{createConstants.chooseColor}</span>
              <Link to="/create/colors">
                <span
                  className={`w-10 h-10 rounded-full flex justify-center items-center bg-${habitColor} cursor-pointer hover:scale-105 transition-all duration-200`}
                ></span>
              </Link>
            </div>
          </div>
        </>
      )}
    </CardLayout>
  );
};
