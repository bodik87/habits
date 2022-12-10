import { useNavigate, useOutletContext } from "react-router-dom";
import { colors } from "../assets/constants";

export const Colors = () => {
  const navigate = useNavigate();
  const { setHabitColor } = useOutletContext<any>();

  const clickHandler = (text: string) => {
    setHabitColor(text);
    navigate(-1);
  };

  const colStartClasses = ["col-start-1", "col-start-2", "col-start-3"];

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <div key={color} className={`${colStartClasses[index]} mx-auto`}>
            <span
              onClick={() => clickHandler(color)}
              className={`w-24 h-24 rounded-full flex justify-center items-center bg-${color} cursor-pointer hover:scale-105 transition-all duration-200`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};
