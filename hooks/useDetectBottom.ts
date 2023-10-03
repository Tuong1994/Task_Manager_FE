import React from "react";

const useDetectBottom = (ref: React.RefObject<HTMLElement>) => {
  const [isBottom, setIsBottom] = React.useState<boolean>(false);

  let elmentBottom: number = 0;

  React.useEffect(() => {
    if (typeof window === "undefined") return setIsBottom(false);

    if (!ref.current && ref.current === null) return setIsBottom(false);

    elmentBottom = ref.current.getBoundingClientRect().bottom;

    if (window.innerHeight - elmentBottom < 200) return setIsBottom(true);

    return setIsBottom(false);
  }, [window?.innerHeight, elmentBottom]);

  return isBottom;
};

export default useDetectBottom;
