import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5.5 5a1.995 1.995 0 0 0 .762 1.57.586.586 0 0 1 .238.45V10a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4V7.02a.586.586 0 0 1 .238-.45A2 2 0 1 0 5.5 5zm14 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm-2 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-11-5a1 1 0 0 1 2 0v.98a.586.586 0 0 0 .238.45 2 2 0 1 1-2.477 0 .585.585 0 0 0 .239-.45z" /></svg>);