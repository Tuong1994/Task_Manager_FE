"use client";

import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import ImageView from "./View";

export interface ImageProps extends NextImageProps {
  rootClassName?: string;
  rootStyle?: React.CSSProperties;
  objectFit?: "fill" | "cover" | "contain" | "none";
  size?: "sm" | "md" | "lg" | number;
  hasView?: boolean;
  hasRemove?: boolean;
  onRemove?: () => void;
}

const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (
  {
    rootClassName = "",
    rootStyle,
    objectFit = "cover",
    size = "sm",
    src,
    hasView = true,
    hasRemove,
    onRemove,
    ...restProps
  },
  ref
) => {
  const [view, setView] = React.useState<boolean>(false);

  const iconProps = { size: 16, className: "actions-icon" };

  const imageFitClassName = `image-view-${objectFit}`;

  const imageSize = () => {
    if (typeof size === "number") return { width: size, height: size };

    if (size === "sm") return { width: 100, height: 100 };

    if (size === "md") return { width: 200, height: 200 };

    if (size === "lg") return { width: 300, height: 300 };
  };

  const handleOpenView = () => setView(true);

  const handleCloseView = () => setView(false);

  return (
    <div style={rootStyle} className={`image ${rootClassName}`}>
      <NextImage
        ref={ref}
        src={src}
        {...restProps}
        {...imageSize()}
        className={`image-view ${imageFitClassName}`}
      />

      {hasView && (
        <div className="image-actions">
          <FaEye {...iconProps} onClick={handleOpenView} />
          {hasRemove && <FaTrash {...iconProps} onClick={onRemove} />}
        </div>
      )}

      <ImageView open={view} src={src} onClose={handleCloseView} />
    </div>
  );
};

export default React.forwardRef(Image);
