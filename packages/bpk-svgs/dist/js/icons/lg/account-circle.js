import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM9.809 7.254A1.283 1.283 0 0 1 11.12 6h1.763a1.283 1.283 0 0 1 1.31 1.254V9.35a2.194 2.194 0 0 1-4.384 0zM16.5 16a5.28 5.28 0 0 1-4.5 2 5.261 5.261 0 0 1-4.5-2 1.345 1.345 0 0 1 0-1.5 7.204 7.204 0 0 1 4.5-1.497 7.322 7.322 0 0 1 4.5 1.497c.345.28.274 1.15 0 1.5z" /></svg>);