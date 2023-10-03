import React from "react";

interface SideProps {}

const Side: React.ForwardRefRenderFunction<HTMLDivElement, SideProps> = ({}, ref) => {
    return <div className="layout-side">
        Side
    </div>
}

export default React.forwardRef(Side);