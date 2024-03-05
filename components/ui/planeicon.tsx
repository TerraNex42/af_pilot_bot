import { SVGProps } from "react";
import * as React from "react";

interface PlaneIconType extends React.SVGProps<SVGSVGElement> {
  variant?: "plus" | "minus" 
}

function PlaneIcon( props : PlaneIconType) {
  return (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Layer_1">
        <title>Layer 1</title>
        <rect
          rx="4"
          id="svg_1"
          height="30"
          width="30"
          y="1"
          x="1"
          stroke-width="2"
          stroke="#000"
          fill="none"
        />
        <rect
          id="svg_2"
          height="0.125"
          width="0"
          y="32.49999"
          x="63.91686"
          stroke-width="0"
          stroke="#000"
          fill="#666666"
        />
        <line
          stroke="#000"
          id="svg_4"
          y2="25"
          x2="16"
          y1="7"
          x1="16"
          stroke-width={props.variant === "plus" ? 1 : 0}
          fill="none"
        />
        <line
          transform="rotate(90 16 16)"
          stroke="#000"
          id="svg_5"
          y2="25"
          x2="16"
          y1="7"
          x1="16"
          stroke-width="2"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default PlaneIcon;
