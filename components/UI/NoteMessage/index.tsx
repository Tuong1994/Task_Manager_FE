import useTheme from "@/hooks/useTheme";
import React from "react";

export interface NoteMessageProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  message?: string;
  size?: number;
  weight?: number;
  type?: "base" | "error";
  textStyle?: "normal" | "italic";
}

const NoteMessage: React.ForwardRefRenderFunction<HTMLDivElement, NoteMessageProps> = (
  {
    message = "Note message",
    rootClassName = "",
    type = "note",
    style,
    size = 12,
    weight = 400,
    textStyle = "normal",
  },
  ref
) => {
  const themeClassName = useTheme("note-message");

  const messageStyle = { fontSize: `${size}px`, fontWeight: weight, fontStyle: textStyle };

  return (
    <div
      ref={ref}
      style={style}
      className={`note-message note-message-${type} ${themeClassName} ${rootClassName}`}
    >
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default React.forwardRef(NoteMessage);
