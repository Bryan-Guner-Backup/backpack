import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21 7H3a.945.945 0 0 1-1-1 .945.945 0 0 1 1-1h18a.945.945 0 0 1 1 1 .945.945 0 0 1-1 1zm-4 5c0-.6-.333-1-.833-1H2.833c-.5 0-.833.4-.833 1s.333 1 .833 1h13.334c.5 0 .833-.4.833-1zm3.889 5a1.006 1.006 0 1 1 0 2H3.11a1.006 1.006 0 1 1 .001-2h17.778z" /></svg>);