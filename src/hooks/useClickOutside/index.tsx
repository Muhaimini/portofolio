import React from "react";

const useClickOutside = (
  ref: React.MutableRefObject<any>,
  action: () => void
) => {
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    }

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref.current, action]);
  return null;
};

export default useClickOutside;
