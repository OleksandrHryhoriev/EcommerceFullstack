import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & { color?: string };

export default function ArrowSolidIcon({ color, ...props }: Props) {
   return (
      <svg width="100%" height="100%" viewBox="0 0 24 24" {...props}>
         <g
            fill={color ? color : "currentColor"}
            stroke={color ? color : "currentColor"}
            strokeWidth="1"
         >
            <path d="M6 2L20 12L6 22Z" />
         </g>
      </svg>
   );
}
