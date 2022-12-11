import { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21.213}
    height={21.213}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.799 12.02-9.9-9.899A1 1 0 1 1 11.314.707l9.9 9.9-1.415 1.414Z"
      fillRule="evenodd"
      fill="#050505"
    />
    <path
      d="m21.213 10.607-9.9 9.9A1 1 0 0 1 9.9 19.091l9.9-9.9 1.414 1.415Z"
      fillRule="evenodd"
      fill="#050505"
    />
  </svg>
);
