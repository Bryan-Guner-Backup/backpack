import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.4 10.194a13.01 13.01 0 0 0-20.8 0 3.025 3.025 0 0 0 0 3.615 13.014 13.014 0 0 0 20.8 0 3.023 3.023 0 0 0 0-3.615zM12 17a5.07 5.07 0 0 1-5-5 5.07 5.07 0 0 1 5-5 5.07 5.07 0 0 1 5 5 5.07 5.07 0 0 1-5 5zm2-5a2 2 0 1 1-2-2 2.028 2.028 0 0 1 2 2z" /></svg>);