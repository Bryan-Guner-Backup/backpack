import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M17 1.809H7a3 3 0 0 0-3 3V21.19a1 1 0 0 0 1.447.894l5.659-2.83a2 2 0 0 1 1.788 0l5.659 2.83A1 1 0 0 0 20 21.19V4.809a3 3 0 0 0-3-3zm-.293 6.858l-5.643 6.142-3.701-3.33a1.155 1.155 0 0 1-.134-1.531.946.946 0 0 1 1.408-.146l2.299 2.068 4.357-4.743a.932.932 0 0 1 .081-.082.944.944 0 0 1 1.333.082 1.16 1.16 0 0 1 0 1.54z" /></svg>);