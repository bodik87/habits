import { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";

interface ICardProps {
  color: string;
  title: string;
}

export const Card = ({ color, title }: ICardProps) => {
  const [goal, setGoal] = useState(5);
  const [result, setResult] = useState(1);
  const [circle, setCircle] = useState(0);
  const [percent, setPercent] = useState(0);

  const [width, setWidth] = useState(0);

  const cardWidth = useRef<any>();
  useEffect(() => {
    setWidth(cardWidth.current.clientWidth + 50);
  }, []);

  const step = Math.ceil((width * 1.8) / goal);

  const setProgress = () => {
    if (percent !== 100) {
      setResult(result + 1);
      setCircle(circle + step);
      setPercent(Math.ceil((result / goal) * 100));
    }
  };

  return (
    <div
      ref={cardWidth}
      onClick={setProgress}
      className="h-24 bg-myWhite p-6 rounded-xl relative overflow-hidden"
    >
      <div className="flex items-center justify-end">
        <div
          className={`${color} left-8 flex justify-center items-center rounded-full absolute z-0`}
          style={{
            width: `${circle}px`,
            height: `${circle}px`,
            marginLeft: `-${circle - circle / 2}px`,
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
