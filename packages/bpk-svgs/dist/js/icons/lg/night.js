import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M15.169 14.86a7.486 7.486 0 0 1-6.027-6.03A7.615 7.615 0 0 1 10.95 2.4c.1-.2 0-.402-.201-.402A10.044 10.044 0 1 0 22 13.251c0-.2-.2-.402-.402-.2a7.85 7.85 0 0 1-6.43 1.808z" /></svg>);