import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.002 15.001h-.063a.999.999 0 1 1 .063 0zm.993-3.883a1 1 0 0 1-1.986 0l-.007-.117L11 8l.007-.116a1 1 0 0 1 1.986-.001L13 8l.002 5.001z" /></svg>);