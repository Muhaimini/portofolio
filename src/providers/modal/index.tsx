import cx from "classnames";
import { FC, Fragment, ReactNode } from "react";

import { ModalProps } from "./types";
import { useModalStore } from "^services/store";
import Card from "^components/card";

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  const { display, title, setDisplay } = useModalStore();

  return (
    <Fragment>
      <div
        onClick={() => setDisplay(false)}
        className={cx(
          "fixed h-screen w-full flex items-center justify-center bg-transparent-black top-0",
          { hidden: !display }
        )}
      >
        <Card
          title={title}
          onClose={() => setDisplay(false)}
          onClick={(event) => event.stopPropagation()}
          className="relative w-1/4 min-h-1/3 rounded shadow-xl !border-none"
          {...props}
        >
          {children}
        </Card>
      </div>
    </Fragment>
  );
};

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { chlidren: element } = useModalStore();
  return (
    <Fragment>
      {children}
      <Modal>{element}</Modal>
    </Fragment>
  );
};

export default ModalProvider;
