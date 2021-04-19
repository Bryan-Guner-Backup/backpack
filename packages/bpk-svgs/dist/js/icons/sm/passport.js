import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M17.7 1.5H4.031A1.04 1.04 0 0 0 3 2.55v18.9a1.04 1.04 0 0 0 1.031 1.05H17.7A3.405 3.405 0 0 0 21 19V5a3.405 3.405 0 0 0-3.3-3.5zM12 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm3 12H9a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 0 3z" /></svg>);