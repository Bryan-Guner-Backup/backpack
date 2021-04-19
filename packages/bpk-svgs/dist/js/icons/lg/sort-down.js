import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M2.506 17h8a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zm6.167-3c.5 0 .833-.4.833-1s-.333-1-.833-1H2.34c-.5 0-.833.4-.833 1s.333 1 .833 1zM7.506 8a1 1 0 0 1-1.11 1h-3.78a1.006 1.006 0 1 1 .001-2h3.78a1 1 0 0 1 1.11 1zm5.293 6.707a1 1 0 0 1 1.414-1.414l2.293 2.293V6a1 1 0 0 1 2 0v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0z" /></svg>);