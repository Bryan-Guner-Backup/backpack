import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM9 18a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9 18zm1.5-4.5h-3a1.5 1.5 0 0 1 0-3v-3a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1 0 3zM15 18a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 15 18zm0-4.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM15 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 15 9z" /></svg>);