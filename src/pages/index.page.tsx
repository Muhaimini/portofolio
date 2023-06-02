import { useModalStore } from "^services/store";
import { useRouter } from "next/router";
import React from "react";

const Main = () => {
  const router = useRouter();
  const { setChildren } = useModalStore();

  const onOpenModal = () => {
    setChildren({ element: "Hello...", title: "Test" });
  };

  return (
    <div className="flex gap-2">
      <div
        className="border px-2 py-1 cursor-pointer rounded shadow-md"
        onClick={() => router.push("/home")}
      >
        Go to Home
      </div>
      <div
        onClick={onOpenModal}
        className="border px-2 py-1 cursor-pointer rounded shadow-md"
      >
        Click Me to display the modal!
      </div>
    </div>
  );
};

export default Main;
