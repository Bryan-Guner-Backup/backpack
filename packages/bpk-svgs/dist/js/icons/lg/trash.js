import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5 4a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm13.91 4.083a1 1 0 0 0-.914-1.08Q17.955 7 17.913 7H6.087a1 1 0 0 0-1 1q0 .041.003.083L6 19a3.226 3.226 0 0 0 3 3h6a3.226 3.226 0 0 0 3-3zM8 3.79V4h8v-.147a.864.864 0 0 0-.324-.699A6.097 6.097 0 0 0 12 2a6.08 6.08 0 0 0-3.74 1.179.77.77 0 0 0-.26.61z" /></svg>);