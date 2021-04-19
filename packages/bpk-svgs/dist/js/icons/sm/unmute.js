import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 15.75a4.5 4.5 0 0 0 4.5-4.5V3c0-1.242-2.016-2.25-4.5-2.25C9.514.75 7.5 1.758 7.5 3v8.25a4.5 4.5 0 0 0 4.5 4.5z" /><path d="M6 11.25a1.5 1.5 0 0 0-3 0 9.003 9.003 0 0 0 7.126 8.805.466.466 0 0 1 .374.451v1.244a1.5 1.5 0 0 0 3 0v-1.244a.466.466 0 0 1 .374-.451A9.004 9.004 0 0 0 21 11.25a1.5 1.5 0 0 0-3 0 6 6 0 0 1-12 0z" /></svg>);