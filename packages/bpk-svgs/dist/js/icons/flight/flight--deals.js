import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M19 7h-2.18A3 3 0 0 0 17 6a3 3 0 0 0-5-2.22A3 3 0 0 0 7.18 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-5-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM9 6a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm10 13H5V9h14zm-3-3.88l-1.07.62v1.24h-1.24L13.07 18 12 17.38l-1.07.62-.62-1.07H9.07v-1.24L8 15.07 8.62 14 8 12.93l1.07-.62v-1.24h1.24l.62-1.07 1.07.62 1.07-.62.62 1.07h1.24v1.24l1.07.62-.62 1.07z" /></svg>;
  }

}