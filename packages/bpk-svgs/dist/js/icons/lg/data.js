import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.468 10.416a.912.912 0 0 0 .926-1.1 9.076 9.076 0 0 0-6.71-6.71.913.913 0 0 0-1.1.928v5.882a1 1 0 0 0 1 1z" /><path d="M19.585 12.416a.92.92 0 0 1 .945.998 9.001 9.001 0 1 1-9.943-9.943.92.92 0 0 1 .998.945v6a2 2 0 0 0 2 2z" /></svg>);