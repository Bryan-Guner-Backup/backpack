import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.713 11.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.39-1.438l.024.024 5.293 5.293V5a1 1 0 0 1 2 0v11.586l5.293-5.293a1 1 0 0 1 1.414 0z" /></svg>);