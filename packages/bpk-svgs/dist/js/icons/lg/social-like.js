import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M7.443 11.896V20a1 1 0 0 0 1 1h6.035a5 5 0 0 0 4.682-3.244l2.27-6.054A2 2 0 0 0 19.557 9h-4.833a1 1 0 0 1-.97-1.243l.297-1.188A2.873 2.873 0 0 0 11.263 3a.479.479 0 0 0-.443.296l-3.227 7.838a2 2 0 0 0-.151.762zm-2 .604a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 3 0z" /></svg>);