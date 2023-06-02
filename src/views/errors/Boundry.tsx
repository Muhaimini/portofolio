import React, { memo } from "react";
import { useRouter } from "next/router";

export interface ErrorBoundaryProps {
  message?: string;
}

const ErrorBoundary = ({ message }: ErrorBoundaryProps) => {
  const { back, reload } = useRouter();

  const onBack = () => {
    back();
    setTimeout(() => {
      reload();
    }, 100);
  };

  console.log("ERROR MESSAGE : ", message);

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <h1>Oops.. something wrong!</h1>
      <button onClick={onBack}>back</button>
    </div>
  );
};

export default memo(ErrorBoundary);
