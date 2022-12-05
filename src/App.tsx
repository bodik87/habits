import { Card } from "./components/Card";

const COLORS = [
  "bg-myBlue",
  "bg-myYellow",
  "bg-myRed",
  "bg-myPink",
  "bg-myViolet",
];

const cards = [
  { id: 1, title: "Read a book", color: "bg-myBlue" },
  { id: 2, title: "Lern Something New", color: "bg-myYellow" },
];

function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} color={card.color} />
      ))}
    </div>
  );
}

export default App;
