import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 22.5A10.5 10.5 0 1 0 1.5 12 10.5 10.5 0 0 0 12 22.5zM7.938 7.94h.002a1.5 1.5 0 0 1 2.12 0L12 9.878l1.94-1.94a1.5 1.5 0 0 1 2.12 2.122L14.122 12l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12L12 14.122l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.122L9.878 12l-1.94-1.94a1.5 1.5 0 0 1 0-2.12z" /></svg>);