import { Link } from "react-router-dom";

interface PlusType {
  onClick: () => void;
}

export const Plus = ({ onClick }: PlusType) => {
  return (
    <Link to={"/create"} onClick={onClick}>
      <div className="w-[1.8rem] h-[1.8rem] flex items-center justify-center cursor-pointer">
        <span className="bg-myDark h-[2px] w-[1.8rem]"></span>
        <span className="bg-myDark h-[2px] w-[1.8rem] rotate-90 absolute"></span>
      </div>
    </Link>
  );
};
