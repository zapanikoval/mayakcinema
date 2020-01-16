import React from "react";
import "../Styles/Content.scss";
import FilmCard from "./FilmCard";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <FilmCard />
        <FilmCard />
      </div>
    );
  }
}

export default Content;
