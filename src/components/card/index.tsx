import { ReactNode, HTMLAttributes } from "react";
import cx from "classnames";

import { isEmpty } from "lodash";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  onClose?: () => void;
}

export enum CLASSNAME {
  CARD = "bg-white border relative",
  TITLE = "flex items-center gap-2 mb-2 border-b p-3",
}

const Card = ({ className, children, title, ...props }: CardProps) => {
  return (
    <div {...props} className={cx(CLASSNAME.CARD, className ?? "")}>
      <XMarkIcon
        className="absolute w-5 h-5 right-3 top-3.5 cursor-pointer"
        onClick={props?.onClose}
      />
      <div className={cx(CLASSNAME.TITLE, { hidden: isEmpty(title) })}>
        <p>{title}</p>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export default Card;
