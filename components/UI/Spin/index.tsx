import React from "react";

interface SpinProps {
  rootClassName?: string;
}

const Spin: React.FC<SpinProps> = ({ rootClassName = "" }) => {
  return (
    <div className={`spin ${rootClassName}`}>
      <div className="spin-item">
        <div className="item-dot"></div>
        <div className="item-dot"></div>
      </div>
      <div className="spin-item">
        <div className="item-dot"></div>
        <div className="item-dot"></div>
      </div>
    </div>
  );
};

export default Spin;
