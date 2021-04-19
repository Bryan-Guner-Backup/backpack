import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2zm1.5 12H10v2a1 1 0 0 1-2 0V7h5.5a3.5 3.5 0 0 1 0 7zm1.5-3.5a1.5 1.5 0 0 1-1.5 1.5H10V9h3.5a1.5 1.5 0 0 1 1.5 1.5z" /></svg>);