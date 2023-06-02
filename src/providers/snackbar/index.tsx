import { Fragment, ReactNode, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import cx from "classnames";

import { useSnackBarStore } from "^services/store";

interface SnackProps {
  children: ReactNode;
}

const Snackbar = ({ children }: SnackProps) => {
  const { contents, onDestruckSnackbar } = useSnackBarStore();

  useEffect(() => {
    if (!!contents.length) {
      const time = setTimeout(() => {
        onDestruckSnackbar();
      }, 1400);
      return () => {
        clearTimeout(time);
      };
    }
  }, [contents.length]);

  return (
    <Fragment>
      {children}
      <div className="fixed flex flex-col top-20 items-center gap-3 z-50 w-full">
        {contents.map((item, idx) => (
          <div
            key={idx}
            className={cx(
              "px-4 py-3 flex flex-col gap-1 min-w-[200px] max-w-[600px] items-center jutify-center text-white rounded-md",
              item.type === "success" ? "bg-green-400" : "bg-red-500"
            )}
          >
            <div className="flex gap-2 items-center justify-between w-full">
              <div className="break-all">{item.message}</div>
              <div>
                <XMarkIcon
                  className="cursor-pointer w-5 h-5"
                  onClick={() => onDestruckSnackbar(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Snackbar;
