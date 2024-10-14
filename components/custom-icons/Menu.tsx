import React from "react";
import type { SVGProps } from "react";

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M20 12H10m10-7H4m16 14H4"
        color="black"
      ></path>
    </svg>
  );
}
