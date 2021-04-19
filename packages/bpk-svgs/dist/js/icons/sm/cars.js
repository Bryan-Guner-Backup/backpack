import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M24 13.47v1.08c0 1.08 0 2.7-1 2.7h-1.25a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742h-4.5a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742H1.5v-.006a.48.48 0 0 1-.063.005h-.03a.677.677 0 0 1-.09-.003C.33 17.25.072 15.49.004 14.564a1.976 1.976 0 0 1 .225-1.044l1.658-3.058a1.288 1.288 0 0 1 1.112-.713h11c1 0 .88-1.034.194-1.57a6.627 6.627 0 0 0-1.596-.999 8.046 8.046 0 0 0-3.061-.545 13.723 13.723 0 0 0-3.226.417A43.545 43.545 0 0 0 1.909 8.44a.542.542 0 0 1-.69-.408l-.003-.012a.698.698 0 0 1 .334-.845A29.788 29.788 0 0 1 6.07 5.66a14.068 14.068 0 0 1 3.322-.409h.1a9.342 9.342 0 0 1 3.498.587 16.922 16.922 0 0 1 4.05 3.136 1.083 1.083 0 0 0 .668.31 11.953 11.953 0 0 1 4.79 1.486 3.012 3.012 0 0 1 1.5 2.7z" /><path d="M7.5 17.25a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm12 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" /></svg>);