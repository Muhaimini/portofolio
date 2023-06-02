import React, { useState } from "react";

const useDisclosure = (props?: boolean) => {
  const [isOpen, setOpen] = useState<boolean>(props || false);
  return {
    isOpen,
    setOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((val) => !val),
  };
};

export default useDisclosure;
