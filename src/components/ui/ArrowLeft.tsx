import { SVGProps } from "react";

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="dark:invert"
    width={21.213}
    height={21.213}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.414 9.192 9.9 9.9a1 1 0 0 1-1.415 1.414L0 10.606l1.414-1.414Z"
      fillRule="evenodd"
      fill="#050505"
    />
    <path
      d="m0 10.607 9.9-9.9a1 1 0 1 1 1.414 1.414l-9.9 9.9L0 10.607Z"
      fillRule="evenodd"
      fill="#050505"
    />
  </svg>
);
