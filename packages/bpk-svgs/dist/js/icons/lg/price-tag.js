import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21 6.908A3.908 3.908 0 0 0 17.092 3H12.62a3 3 0 0 0-2.12.878l-6.623 6.624a2.997 2.997 0 0 0 0 4.238l5.382 5.382a2.997 2.997 0 0 0 4.238 0l6.624-6.624A2.996 2.996 0 0 0 21 11.38V6.91zM16.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>);