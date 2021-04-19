import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2zm4.707 7.858L11.064 16l-3.701-3.329a1.155 1.155 0 0 1-.134-1.532.946.946 0 0 1 1.408-.146l2.299 2.068 4.357-4.743a.944.944 0 0 1 1.414 0 1.16 1.16 0 0 1 0 1.54z" /></svg>);