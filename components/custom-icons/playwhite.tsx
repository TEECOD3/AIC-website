import React from "react";
import type { SVGProps } from "react";

export function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSPlay0">
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <path
              fill="#fff"
              stroke="#fff"
              d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
            ></path>
            <path
              fill="#000"
              stroke="#000"
              d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
            ></path>
          </g>
        </mask>
      </defs>
      <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSPlay0)"></path>
    </svg>
  );
}
