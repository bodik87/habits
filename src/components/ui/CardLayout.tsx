import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardLayoutProps {
  children: ReactNode;
  leftLinkText: string;
  leftOnClick: string;
  rightLinkText: string;
  title: string;
  habitColor: string;
}

export const CardLayout = ({
  children,
  leftLinkText,
  leftOnClick,
  rightLinkText,
  title,
  habitColor,
}: CardLayoutProps) => {
  return (
    <>
      <div
        className={`sticky max-w-[43rem] mx-auto bg-${habitColor} backdrop-blur-md top-0 h-14 z-20 px-8  flex justify-between items-center border-b border-black/10`}
      >
        <Link className="text-sm" to={leftOnClick}>
          {leftLinkText}
        </Link>
        <div>{title}</div>
        <Link className="text-sm" to="">
          {rightLinkText}
        </Link>
      </div>
      <div className="max-w-[43rem] mx-auto">{children}</div>
    </>
  );
};