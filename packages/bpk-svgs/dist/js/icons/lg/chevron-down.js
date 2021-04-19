import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.287 7.8a1 1 0 0 1 1.414 0l6.293 6.292L18.287 7.8a1 1 0 1 1 1.438 1.39l-.024.024-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z" /></svg>);