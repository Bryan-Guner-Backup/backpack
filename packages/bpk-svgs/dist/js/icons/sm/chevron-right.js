import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M8.095 4.887a1.496 1.496 0 0 1 2.008 0l5.948 6.397a1 1 0 0 1 .003 1.358l-6.01 6.532a1.427 1.427 0 0 1-1.949-.138 1.572 1.572 0 0 1-.103-1.997l4.638-5.078-4.535-4.97a1.72 1.72 0 0 1 0-2.104z" /></svg>);