import * as React from "react";

export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  const { stroke, fill } = props;

  return (
    <svg
      width="32"
      height="32"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M4 12.0001L16 2.66675L28 12.0001V26.6668C28 27.374 27.719 28.0523 27.219 28.5524C26.7189 29.0525 26.0406 29.3334 25.3333 29.3334H6.66667C5.95942 29.3334 5.28115 29.0525 4.78105 28.5524C4.28095 28.0523 4 27.374 4 26.6668V12.0001Z"
          stroke={stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 29.3333V16H20V29.3333"
          stroke={stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
