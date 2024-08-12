import { useEffect } from "react";
/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      console.log(ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;