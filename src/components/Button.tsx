import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  className?: string;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,...attributes
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black")}
      {...attributes}
    >
      {children}
    </button>
  );
};
