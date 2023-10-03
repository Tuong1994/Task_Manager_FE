import React from "react";

const useRender = (trigger: boolean, time?: number) => {
  const [render, setRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (trigger && !render) setRender(true);
    if (!trigger && render) setTimeout(() => setRender(false), time ?? 300);
  }, [trigger]);

  return render;
};

export default useRender;
