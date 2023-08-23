import * as React from "react"
const Heart = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={26}
    fill={color}
  >
    <path
      fill={color}
      d="M14.61 6.214S10.16 1.704 5.6.984c-4.57-.72-6.91 5.35-4.27 10.27 2.64 4.93 4.69 7.63 7.81 10.57 3.12 2.94 4.57 4.09 6.01 3.61 1.44-.48 8.35-5.84 11.6-12.2 3.24-6.36 2.22-9.91 0-11.59-2.23-1.68-5.83-2.28-12.14 4.57Z"
    />
  </svg>
)
export default Heart