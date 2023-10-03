import React from "react";

const useViewpoint = () => {
  if (typeof window === "undefined") return {};

  const [screenX, setScreenX] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenX(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const isPhone = React.useMemo(() => screenX >= 320 && screenX <= 480, [screenX]);

  const isTablet = React.useMemo(() => screenX > 480 && screenX <= 768, [screenX]);

  const isLaptop = React.useMemo(() => screenX > 768 && screenX <= 1100, [screenX]);

  const isDesktop = React.useMemo(() => screenX > 1100, [screenX]);

  return { screenX, isPhone, isTablet, isLaptop, isDesktop };
};

export default useViewpoint;
