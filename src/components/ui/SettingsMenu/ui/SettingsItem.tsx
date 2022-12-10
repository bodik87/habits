import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  onClick: () => void;
}

export const SettingsItem = (props: ModalType) => {
  return (
    <div
      onClick={props.onClick}
      className="cursor-pointer hover:text-red-700 transition-all duration-200 font-medium"
    >
      {props.children}
    </div>
  );
};
