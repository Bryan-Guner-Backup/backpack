import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.23 4.072a4.771 4.771 0 0 0-6.62.577 5.514 5.514 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.859 1.859 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.516 5.516 0 0 0-1.389-5.408 4.77 4.77 0 0 0-6.62-.577l-1.126.95a1 1 0 0 1-1.29 0z" /></svg>);