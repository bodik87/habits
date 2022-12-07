import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { cards } from "../data";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full px-4 pb-20 max-w-[38rem] mx-auto flex flex-col gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            color={card.color}
            repeat={card.repeat}
          />
        ))}
      </div>
    </>
  );
};
