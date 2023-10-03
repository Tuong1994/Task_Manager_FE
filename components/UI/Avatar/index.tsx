import React from "react";
import { FaUserAlt } from "react-icons/fa";

export interface AvatarProps {
  rootClassName?: string;
  size?: number;
  style?: React.CSSProperties;
  showDot?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Avatar: React.ForwardRefRenderFunction<HTMLDivElement, AvatarProps> = (
  { rootClassName = "", size = 35, showDot, style, children },
  ref
) => {
  const inlineStyle: React.CSSProperties = { ...style, width: `${size}px`, height: `${size}px` };

  return (
    <div ref={ref} style={inlineStyle} className={`avatar ${rootClassName}`}>
      {children ? (
        <div className="avatar-child">{children}</div>
      ) : (
        <div className="avatar-inner">
          <FaUserAlt size={12} />
        </div>
      )}

      {showDot && <div className="avatar-dot" />}
    </div>
  );
};

export default React.forwardRef(Avatar);
