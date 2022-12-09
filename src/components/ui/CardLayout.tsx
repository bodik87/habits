import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardLayoutProps {
  title: string;
  children: ReactNode;
  habitColor: string;
  leftLinkText?: string;
  leftLinkPath: string;
  rightLinkText?: string;
  rightLinkPath: string;
  rightBtnFunction?: () => void;
}

export const CardLayout = ({
  children,
  leftLinkText,
  leftLinkPath,
  rightLinkText,
  rightLinkPath,
  rightBtnFunction,
  title,
  habitColor,
}: CardLayoutProps) => {
  return (
    <>
      <div
        className={`sticky max-w-[43rem] mx-auto ${habitColor} backdrop-blur-md top-0 h-20 z-20 px-6 flex justify-between items-center border-b border-black/10`}
      >
        <Link className="font-medium min-w-[50px]" to={leftLinkPath}>
          {leftLinkText}
        </Link>
        <div className="text-xl font-medium">{title}</div>
        <Link
          className="font-medium min-w-[50px] text-right"
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
