import useTestQuery from "^hooks/query/test";
import { generateUUID } from "^libs/helper";
import { useSnackBarStore } from "^services/store";
import React, { memo } from "react";

const Home = () => {
  const { data, isLoading } = useTestQuery();

  const { setSnackbarContents } = useSnackBarStore();

  const onAddSnackbar = () => {
    setSnackbarContents((prev) =>
      prev.concat({
        type: "error",
        message: generateUUID(),
      })
    );
  };

  return (
    <div className="flex h-full w-full">
      <div className="border-r h-full w-full">
        <div className="cursor-pointer" onClick={onAddSnackbar}>
          Click me to display the snackbar(s)!
        </div>
      </div>
      <div className="h-full w-full">
        {isLoading ? "Loading..." : JSON.stringify(data?.data)}
      </div>
    </div>
  );
};

export default memo(Home);
