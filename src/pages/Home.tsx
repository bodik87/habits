import { noHabits } from "../assets/constants";
import { Habit } from "../components/Habit/Habit";
import { Header } from "../components/Header/Header";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Home = () => {
  const { habits } = useTypedSelector((state) => state.habits);

  return (
    <>
      <Header />
      <div className="w-full px-4 pb-20 max-w-[38rem] mx-auto flex flex-col items-center gap-4">
        {habits.length ? (
          habits.map((habit) => (
            <Habit
              key={habit.id}
              id={habit.id}
              title={habit.title}
              color={habit.color}
              goal={habit.goal}
              checkedDays={habit.checkedDays}
            />
          ))
        ) : (
          <span className="mt-8 text-center">{noHabits}</span>
        )}
      </div>
    </>
  );
};
