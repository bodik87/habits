import { Habit } from "../components/Habit";
import { Header } from "../components/Header";
import { useTypedSelector } from "../components/hooks/useTypedSelector";

export const Home = () => {
  const { habits } = useTypedSelector((state) => state.habits);

  return (
    <>
      <Header />
      <div className="w-full px-4 pb-20 max-w-[38rem] mx-auto flex flex-col gap-4">
        {habits.length ? (
          habits.map((habit) => (
            <Habit
              key={habit.id}
              id={habit.id}
              title={habit.title}
              color={habit.color}
              repeat={habit.repeat}
              checked={habit.checked}
            />
          ))
        ) : (
          <div className="px-4">Привычки отсутствуют</div>
        )}
      </div>
    </>
  );
};
