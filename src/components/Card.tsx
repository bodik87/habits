import { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";

interface ICardProps {
  color: string;
  title: string;
  repeat: number;
}

export const Card = ({ color, title, repeat }: ICardProps) => {
  const [goal, setGoal] = useState(0);
  const [result, setResult] = useState(0);
  const [circleDiameter, setCircleDiameter] = useState(0);
  const [percent, setPercent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const cardWidthRef = useRef<any>();

  useEffect(() => {
    setGoal(repeat);
    setCardWidth(cardWidthRef.current.clientWidth);
  }, []);

  const step = Math.ceil((cardWidth * 1.85) / goal);

  const setProgress = () => {
    if (percent !== 100) {
      setResult(result + 1);
      setCircleDiameter(circleDiameter + step);
      setPercent(Math.ceil((result / goal) * 100));
    }
  };

  return (
    <div
      ref={cardWidthRef}
      onClick={setProgress}
      className="h-24 bg-myWhite p-6 rounded-xl relative overflow-hidden"
    >
      <div className="flex items-center justify-end">
        <div
          className={`${color} left-8 flex justify-center items-center rounded-full absolute z-0`}
          style={{
            width: `${circleDiameter}px`,
            height: `${circleDiameter}px`,
            marginLeft: `-${circleDiameter - circleDiameter / 2}px`,
          }}
        ></div>
        <span className="font-semibold absolute left-5">{percent}%</span>
        <div className="flex gap-4 z-10">
          <div className={styles.check}></div>
          <div className={styles.check}></div>
          <div className={styles.check}></div>
          <div className={styles.check}></div>
          <div className={styles.check}></div>
        </div>
      </div>
      <div className="absolute bottom-3 text-xl text-left mt-5 z-10">
        {title}
      </div>
    </div>
  );
};
