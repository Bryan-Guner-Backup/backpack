import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM5.742 16.142a7.5 7.5 0 0 1 0-8.278l10.394 10.393a7.5 7.5 0 0 1-10.394-2.115zm12.515-.007v.002L7.864 5.742a7.5 7.5 0 0 1 10.393 10.393z" /></svg>);