import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21 6a1 1 0 0 1 1 1v7.018a1.004 1.004 0 0 1-2.008.001V9.438l-7.902 7.968a2.014 2.014 0 0 1-1.428.594H3.004a1 1 0 1 1 0-2h7.658l7.929-7.997h-4.54A1.045 1.045 0 0 1 13 7a1.042 1.042 0 0 1 1.05-1z" /></svg>);