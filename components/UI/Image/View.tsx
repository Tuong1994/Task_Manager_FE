import React from "react";
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus, HiXMark, HiArrowPath } from "react-icons/hi2";
import Portal from "@/components/Portal";
import Draggable from "../Draggable";
import Image, { ImageProps } from "next/image";
import useRender from "@/hooks/useRender";

interface ImageViewProps {
  open?: boolean;
  src: ImageProps["src"];
  onClose?: () => void;
}

const ImageView: React.FC<ImageViewProps> = ({ open = false, src = "", onClose }) => {
  const render = useRender(open);

  const [rotate, setRotate] = React.useState<number>(0);

  const [scale, setScale] = React.useState<number>(1);

  const iconProps = { size: 20, className: "header-icon" };

  const style: React.CSSProperties = { transform: `rotate(${rotate}deg) scale(${scale})` };

  const activeClassName = open ? "image-viewer-active" : "";

  const handleRotate = () => setRotate((prev) => prev + 90);

  const handleScale = (type: "plus" | "minus") => {
    if (type === "plus") {
      if (scale >= 1.6) return;
      setScale((prev) => prev + 0.2);
    }
    if (type === "minus") {
      if (scale <= 0.6) return;
      setScale((prev) => prev - 0.2);
    }
  };
  return (
    <Portal>
      {render ? (
        <div className={`image-viewer ${activeClassName}`}>
          <div className="viewer-header">
            <HiMagnifyingGlassMinus {...iconProps} onClick={() => handleScale("minus")} />
            <HiMagnifyingGlassPlus {...iconProps} onClick={() => handleScale("plus")} />
            <HiArrowPath {...iconProps} onClick={handleRotate} />
            <HiXMark {...iconProps} onClick={onClose} />
          </div>

          <div className="viewer-image">
            <Draggable>
              <div style={style} className="image-item">
                <Image width={600} height={400} className="item-view" src={src} alt="image" />
              </div>
            </Draggable>
          </div>
        </div>
      ) : null}
    </Portal>
  );
};

export default ImageView;
