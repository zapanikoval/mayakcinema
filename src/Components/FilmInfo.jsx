import React from "react";

import "../Styles/FilmInfo.scss";

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-info">
        <div className="background-image"></div>
        <div className="container-info">
            <h1>Hello world</h1>
        </div>
      </div>
    );
  }
}

export default FilmInfo;
