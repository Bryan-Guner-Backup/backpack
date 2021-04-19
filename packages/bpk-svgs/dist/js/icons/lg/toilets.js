import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M15 1.98a.697.697 0 0 1 .382-.668A4.083 4.083 0 0 1 17 1a3.974 3.974 0 0 1 1.595.311.728.728 0 0 1 .405.69v2.513C19 5.5 18 6 17 6s-2-.5-2-1.486zm6 12.243V8.301a.84.84 0 0 0-.548-.823A12.589 12.589 0 0 0 17.035 7a12.666 12.666 0 0 0-3.488.55.852.852 0 0 0-.547.83v5.92c0 .402.62.75 1.191.964a1.195 1.195 0 0 1 .805.99l.45 5.822a1 1 0 0 0 .997.923h1.184a1 1 0 0 0 .997-.923l.45-5.823a1.267 1.267 0 0 1 .797-1.014C20.418 15 21 14.623 21 14.223zM11 8.301v4.922c0 .4-.582.778-1.13 1.017-.046.02-.09.042-.135.067l1.13 6.085a.5.5 0 0 1-.488.608h-1.67l-.083 1.077a1 1 0 0 1-.997.923H6.443a1 1 0 0 1-.997-.923L5.363 21h-1.74a.5.5 0 0 1-.488-.608l1.133-6.096q-.038-.016-.077-.03C3.621 14.05 3 13.702 3 13.3V8.38a.85.85 0 0 1 .547-.829 12.637 12.637 0 0 1 3.488-.55 12.589 12.589 0 0 1 3.417.477.84.84 0 0 1 .548.823zM5.198 2.163a1.49 1.49 0 0 1 2.523-.713c.54-.17 1.009-.064 1.261.811a2.249 2.249 0 0 1 .044 1.005 4.74 4.74 0 0 0-.044.593 2.009 2.009 0 0 0 .413 1.46c.11.096.156.275.026.34A4.47 4.47 0 0 1 7.631 6H6.369a4.505 4.505 0 0 1-1.79-.34c-.13-.066-.084-.245.026-.34a2.013 2.013 0 0 0 .413-1.46 5.642 5.642 0 0 1 .18-1.697z" /></svg>);