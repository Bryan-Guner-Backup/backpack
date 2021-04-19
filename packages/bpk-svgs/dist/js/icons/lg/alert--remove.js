import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18.206 7.21l3.514-3.515a1 1 0 0 0-1.414-1.414l-3.184 3.184A7 7 0 0 0 4.78 9.988v.64a10 10 0 0 1-1.057 4.47l-.497.995a2 2 0 0 0 .695 2.571L2.305 20.28a1 1 0 1 0 1.39 1.439l.024-.025L18.206 7.21c-.062.063.05-.05 0 0zm.337 11.778h-7.91a.5.5 0 0 1-.352-.854l7.893-7.893a.344.344 0 0 1 .597.247l.009.14a9.998 9.998 0 0 0 1.055 4.471l.497.995a2 2 0 0 1-1.79 2.894zm-9.45 1.96c-.28-.486.216-.96.8-.96h4.239c.585 0 1.08.474.8.96a2.141 2.141 0 0 1-1.86 1.04h-2.118a2.138 2.138 0 0 1-1.86-1.04z" /></svg>);