"use client";

import React from "react";
import GridContext from "./Context";
import useViewpoint from "@/hooks/useViewpoint";

type ColSpan =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface GridColProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  span?: ColSpan;
  xs?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
}

const GridCol: React.ForwardRefRenderFunction<HTMLDivElement, GridColProps> = (
  { rootClassName = "", style, children, span = 24, xs, md, lg },
  ref
) => {
  const { gutters } = React.useContext(GridContext);

  const { isDesktop, isLaptop, isTablet, isPhone } = useViewpoint();

  const [width, setWidth] = React.useState<string>("100%");

  const [hide, setHide] = React.useState<boolean>(false);

  const gapSize = !gutters.length ? 10 : gutters[0];

  const calculateWidth = (span: ColSpan) => `calc((100% / 24) * ${span} - ${gapSize}px)`;

  const inlineStyle = () => ({ ...style, width });

  React.useEffect(() => {
    if (hide) setHide(false);

    if (isDesktop) {
      if (span === 0) return setHide(true);

      if (span === 24) return setWidth("100%");

      return setWidth(calculateWidth(span));
    }

    if (isPhone) {
      if (xs === 0) return setHide(true);

      if (xs && xs !== 24) return setWidth(calculateWidth(xs));
    }

    if (isTablet) {
      if (md === 0) return setHide(true);

      if (md && md !== 24) return setWidth(calculateWidth(md));
    }

    if (isLaptop) {
      if (lg === 0) return setHide(true);

      if (lg && lg !== 24) return setWidth(calculateWidth(lg));
    }

    if (xs === 24 || md === 24 || lg === 24) return setWidth("100%");
  }, [span, xs, md, lg, gapSize, hide, isDesktop, isLaptop, isTablet, isPhone]);

  return !hide ? (
    <div ref={ref} style={inlineStyle()} className={`grid-col ${rootClassName}`}>
      {children}
    </div>
  ) : null;
};

export default React.forwardRef(GridCol);
