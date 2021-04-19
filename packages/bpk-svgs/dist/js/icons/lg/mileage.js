import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20 12A8 8 0 0 0 8.89 4.627a1 1 0 0 1-.78-1.842 9.995 9.995 0 1 1-5.54 5.882 1 1 0 0 1 1.904.613l-.019.053A8 8 0 1 0 20 12z" /><path d="M4.293 6.207a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1-1.414 1.414z" /></svg>);