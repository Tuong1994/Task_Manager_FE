import React from "react";

interface GridContextState {
  gutters: [number?, number?];
}

const GridContext = React.createContext<GridContextState>({ gutters: [] });

export default GridContext
