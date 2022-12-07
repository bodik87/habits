import { useEffect, useMemo, useState } from "react";

const Unchecked = () => {
  return (
    <div className="px-2 py-2">
      <div className="w-[10px] h-[10px] border-2 border-myDark rounded-full"></div>
    </div>
  );
};
const Checked = () => {
  return (
    <div className="px-1 py-1 mb-1">
      <svg
        width="18"
        height="18"
        viewBox="0 0 23.3345 23.3345"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.242645"
          y="21.213211"
          width="24.000000"
          height="3.000000"
          transform="rotate(-45 4.242645 21.213211)"
          fill="#050505"
        />
        <rect
          y="16.970566"
          width="3.000000"
          height="6.000000"
          transform="rotate(-45 0.000000 16.970566)"
          fill="#050505"
        />
      </svg>
    </div>
  );
};

interface CheckboxProps {
  isChecked: boolean;
  date: string;
  setProgress: (boolean: boolean) => void;
}

export const Checkbox = ({ isChecked, date, setProgress }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);
  const [checkedDay, setCheckedDay] = useState<string[]>([]);

  const arr = useMemo(() => {
    setCheckedDay((prev) => [...prev, date]);
    return checkedDay;
  }, [checked]);

  useEffect(() => {
    setCheckedDay((prev) => [...prev, date]);
  }, [checked]);

  const toggleCheck = (date: string) => {
    setChecked(!checked);
    setProgress(!checked);
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      onClick={() => toggleCheck(date)}
    >
      {checked ? <Checked /> : <Unchecked />}
    </div>
  );
};
