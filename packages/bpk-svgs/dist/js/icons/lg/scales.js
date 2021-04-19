import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.705 5.467C19.27 4.158 16.955 3 12 3 7.016 3 4.477 4.183 3.228 5.489A.873.873 0 0 0 3 6.097V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6.161a.932.932 0 0 0-.295-.694zM12 18a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" /><path d="M12.273 8.174a.302.302 0 0 0-.546 0l-1.582 3.441A1.778 1.778 0 0 0 12 14a1.778 1.778 0 0 0 1.855-2.385z" /></svg>);