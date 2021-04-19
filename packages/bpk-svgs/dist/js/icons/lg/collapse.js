import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.707 3.293a1 1 0 0 0-1.414 1.414L6.586 8H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v2.586zm-1.414 16a1 1 0 0 0 1.39 1.439l.024-.025L8 17.414V20a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h2.586zm17.414 0L17.414 16H20a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.586l3.293 3.293a1 1 0 0 0 1.414-1.414zm-1.414-16a1 1 0 1 1 1.439 1.39l-.025.024L17.414 8H20a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2.586z" /></svg>);