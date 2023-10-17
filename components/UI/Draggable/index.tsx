"use client";

import React from "react";

export interface DraggableProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

const Draggable: React.FC<DraggableProps> = ({ rootClassName = "", style, children }) => {
  const [mouseX, setMouseX] = React.useState<number>(0);
  const [mouseY, setMouseY] = React.useState<number>(0);

  const [touchX, setTouchX] = React.useState<number>(0);
  const [touchY, setTouchY] = React.useState<number>(0);

  const [dragged, setDragged] = React.useState<boolean>(false);

  const dragRef = React.useRef<HTMLDivElement>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchX(e.touches[0].screenX - e.currentTarget.getBoundingClientRect().left);
    setTouchY(e.touches[0].screenY - e.currentTarget.getBoundingClientRect().top);
    setDragged(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragRef) return;
    if (dragRef && dragRef.current !== null) {
      const left = e.touches[0].screenX - touchX;
      const top = e.touches[0].screenY - touchY;
      dragRef.current.style.left = `${left}px`;
      dragRef.current.style.top = `${top}px`;
    }
  };

  const onTouchEnd = () => setDragged(false);

  const onMouseStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setMouseX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setMouseY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragged(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!dragRef) return;
    if (dragged && dragRef.current !== null) {
      const left = e.screenX - mouseX;
      const top = e.screenY - mouseY;
      dragRef.current.style.left = `${left}px`;
      dragRef.current.style.top = `${top}px`;
    }
  };

  const onMouseEnd = () => setDragged(false);

  return (
    <div
      ref={dragRef}
      style={style}
      className={`draggable ${rootClassName}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseStart}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseEnd}
      onMouseLeave={onMouseEnd}
    >
      {children}
    </div>
  );
};

export default Draggable;
