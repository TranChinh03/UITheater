import * as React from "react"
const SingleSeat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill={props.color}
    {...props}
  >
    <path
      fill={props.color}
      d="M10 16.667v6.666h20v-6.666C30 12.99 31.794 10 34 10h2c0-5.52-2.688-10-6-10H10C6.687 0 4 4.48 4 10h2c2.206 0 4 2.99 4 6.667Zm26-3.334h-2c-1.106 0-2 1.49-2 3.334v10H8v-10c0-1.844-.894-3.334-2-3.334H4c-2.206 0-4 2.99-4 6.667 0 2.458.813 4.583 2 5.74v12.593C2 39.25 2.45 40 3 40h4c.55 0 1-.75 1-1.667v-1.666h24v1.666c0 .917.45 1.667 1 1.667h4c.55 0 1-.75 1-1.667V25.74c1.188-1.157 2-3.282 2-5.74 0-3.677-1.794-6.667-4-6.667Z"
    />
  </svg>
)
export default SingleSeat
