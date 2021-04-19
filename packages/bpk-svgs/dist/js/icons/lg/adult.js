import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style={{
  width: "2rem",
  height: "2rem"
}} {...props}><path d="M10 1.98a.697.697 0 0 1 .382-.667A4.083 4.083 0 0 1 12 1a3.974 3.974 0 0 1 1.595.31A.73.73 0 0 1 14 2v2.514C14 5.5 13 6 12 6s-2-.5-2-1.486zm6 12.244V8.302a.84.84 0 0 0-.548-.823A12.589 12.589 0 0 0 12.035 7a12.671 12.671 0 0 0-3.488.55.854.854 0 0 0-.547.83v5.92c0 .402.62.749 1.191.964a1.195 1.195 0 0 1 .805.989l.45 5.823a1 1 0 0 0 .997.923h1.184a1 1 0 0 0 .997-.923l.45-5.823a1.267 1.267 0 0 1 .797-1.014C15.418 15 16 14.624 16 14.224z" /></svg>);