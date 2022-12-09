import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { IHabitProps } from "../../types";

interface CardLayoutProps {
  title: string;
  children: ReactNode;
  habitColor: string;
  leftLinkText?: string;
  leftLinkPath: string;
  rightLinkText?: string;
  rightLinkPath: string;
  rightBtnText?: string;
  rightBtnFunction?: () => void;
}

export const CardLayout = ({
  children,
  leftLinkText,
  leftLinkPath,
  rightLinkText,
  rightLinkPath,
  rightBtnText,
  rightBtnFunction,
  title,
  habitColor,
}: CardLayoutProps) => {
  return (
    <>
      <div
        className={`sticky max-w-[43rem] mx-auto ${habitColor} backdrop-blur-md top-0 h-20 z-20 px-8  flex justify-between items-center border-b border-black/10`}
      >
        <Link className="font-semibold min-w-[50px]" to={leftLinkPath}>
          {leftLinkText}
        </Link>
        <div className="text-xl font-semibold">{title}</div>
        <Link
          className="font-semibold min-w-[50px]"
          to={rightLinkPath}
          onClick={rightBtnFunction}
        >
          {rightLinkText}
        </Link>
      </div>
      <div className="max-w-[43rem] mx-auto">{children}</div>
    </>
  );
};
