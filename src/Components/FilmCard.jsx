import React from "react";
import "../Styles/FilmCard.scss";
class FilmCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false
    };
  }
  render() {
    return (
      <div className="film-card">
        <div className="blur"></div>
        
        <h3 className="title">Шпионы под прикрытием</h3>
      </div>
    );
  }
}

export default FilmCard;
