import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.89 4.393A2.314 2.314 0 0 0 8.666 2a2.31 2.31 0 0 0-2.222 2.393v1.153a2.307 2.307 0 0 0 2.222 2.336 2.307 2.307 0 0 0 2.222-2.336V4.393zm-6.668 3.49a2.298 2.298 0 0 1 2.222 2.37v1.141a2.298 2.298 0 0 1-2.222 2.37A2.299 2.299 0 0 1 2 11.394v-1.141a2.299 2.299 0 0 1 2.222-2.37zm9.89 4.527l3.843 4.558a3.174 3.174 0 0 1 .48 3.244A2.818 2.818 0 0 1 15.856 22l-1.322-.344a10 10 0 0 0-5.038 0L8.172 22a2.822 2.822 0 0 1-2.581-1.788 3.174 3.174 0 0 1 .482-3.245l3.842-4.557a2.706 2.706 0 0 1 4.198 0zM15.335 2a2.286 2.286 0 0 1 2.22 2.348v1.13a2.376 2.376 0 0 1-1.095 2.08 2.12 2.12 0 0 1-2.252 0 2.378 2.378 0 0 1-1.096-2.08v-1.13A2.288 2.288 0 0 1 15.335 2zM22 10.253a2.227 2.227 0 1 0-4.444 0v1.141a2.227 2.227 0 1 0 4.444 0z" /></svg>);