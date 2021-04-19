import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.391 4.649a4.77 4.77 0 0 0-6.62-.577l-1.136.959a.98.98 0 0 1-1.27 0l-1.135-.96a4.771 4.771 0 0 0-6.62.578 5.514 5.514 0 0 0-1.39 5.408c.855 3.72 5.28 7.895 8.62 10.537a1.859 1.859 0 0 0 2.32 0c3.34-2.642 7.765-6.816 8.62-10.537a5.516 5.516 0 0 0-1.389-5.408zm-.519 4.79l-.022.073-.017.073a13.327 13.327 0 0 1-3.475 5.38 40.185 40.185 0 0 1-3.75 3.464.953.953 0 0 1-1.216 0 40.298 40.298 0 0 1-3.75-3.464 13.327 13.327 0 0 1-3.475-5.38l-.017-.073-.022-.072a3.424 3.424 0 0 1 .88-3.323v-.001a3.26 3.26 0 0 1 1.943-1.05 3.049 3.049 0 0 1 2.074.647l1.704 1.44a1.96 1.96 0 0 0 2.542 0l1.705-1.44a3.038 3.038 0 0 1 2.073-.646 3.244 3.244 0 0 1 1.943 1.05 3.424 3.424 0 0 1 .88 3.323z" /></svg>);