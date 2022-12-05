import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

const COLORS = [
  "bg-myBlue",
  "bg-myYellow",
  "bg-myRed",
  "bg-myPink",
  "bg-myViolet",
];

const cards = [
  { id: 1, title: "Read a book", color: "bg-myBlue", repeat: 20 },
  { id: 2, title: "Lern Something New", color: "bg-myYellow", repeat: 3 },
  { id: 3, title: "Morning 15min Workout", color: "bg-myRed", repeat: 15 },
  {
    id: 4,
    title: "Daily Breathing Meditation",
    color: "bg-myPink",
    repeat: 10,
  },
  { id: 5, title: "Call friend", color: "bg-myViolet", repeat: 8 },
];

function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Header />
      <Navigation />
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          color={card.color}
          repeat={card.repeat}
        />
      ))}
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          color={card.color}
          repeat={card.repeat}
        />
      ))}
    </div>
  );
}

export default App;
