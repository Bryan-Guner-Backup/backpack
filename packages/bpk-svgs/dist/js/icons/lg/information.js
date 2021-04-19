import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21.045 9.695l-6.739-6.74h-.001a3.26 3.26 0 0 0-4.61 0l-6.74 6.74a3.26 3.26 0 0 0 0 4.61l6.74 6.74a3.26 3.26 0 0 0 4.61 0l6.74-6.74a3.26 3.26 0 0 0 0-4.61zM13 16a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /></svg>);