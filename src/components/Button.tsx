import { MouseEventHandler, ReactNode } from "react";
import { classNames } from "../utils/utils";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

function Button({
  children,
  onClick = () => {
    return;
  },
  className = "",
  type = "button",
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`px-1.5 py-1 rounded-md text-white${classNames(className)}`}
    >
      {children}
    </button>
  );
}

export default Button;
