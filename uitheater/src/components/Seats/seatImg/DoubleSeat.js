import * as React from "react"
const DoubleSeat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={40}
    fill={props.color}
    {...props}
  >
    <path
      fill={props.color}
      d="M20 16.667v6.666h40v-6.666C60 12.99 63.587 10 68 10h4c0-5.52-5.375-10-12-10H20C13.375 0 8 4.48 8 10h4c4.413 0 8 2.99 8 6.667Zm52-3.334h-4c-2.213 0-4 1.49-4 3.334v10H16v-10c0-1.844-1.787-3.334-4-3.334H8c-4.412 0-8 2.99-8 6.667 0 2.458 1.625 4.583 4 5.74v12.593C4 39.25 4.9 40 6 40h8c1.1 0 2-.75 2-1.667v-1.666h48v1.666c0 .917.9 1.667 2 1.667h8c1.1 0 2-.75 2-1.667V25.74c2.375-1.157 4-3.282 4-5.74 0-3.677-3.588-6.667-8-6.667Z"
    />
  </svg>
)
export default DoubleSeat
