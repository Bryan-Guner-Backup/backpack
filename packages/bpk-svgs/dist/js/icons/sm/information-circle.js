import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM12 6a1.498 1.498 0 1 1-1.498 1.498A1.498 1.498 0 0 1 12 6zm1.493 10.676a1.5 1.5 0 0 1-2.98.001l-.01-.175-.003-4.501.01-.176a1.5 1.5 0 0 1 2.98 0l.01.175.003 4.501z" /></svg>);