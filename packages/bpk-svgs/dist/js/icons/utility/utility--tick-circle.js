import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.85 6.99l-6.5 7.41a1.2 1.2 0 0 1-1.69.12L6.2 13.45a.602.602 0 0 1-.06-.85l.79-.91c.22-.25.6-.28.85-.06l2.37 2.13c.1.09.25.08.34-.02l5.55-6.32c.22-.25.6-.28.85-.06l.9.79c.26.21.28.59.06.84z" /></svg>;
  }

}