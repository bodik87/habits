import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { cards } from "./data";

function App() {
  return (
    <>
      <Header />
      <div className="w-full px-4 pb-20 max-w-[38rem] mx-auto flex flex-col gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            color={card.color}
            repeat={card.repeat}
          />
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
