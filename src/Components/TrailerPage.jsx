import React from "react";
import "../Styles/TrailerPage.scss";
import Fab from "@material-ui/core/Fab";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import films from "./films";

class TrailerPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }
  render() {
    const title = films.find(
      film => film.link === this.props.match.params.trailerLink
    ).name;
    return (
      <div className="trailer-page">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="container-info">
          <Fab size="small" className="btn-back" onClick={this.handleClick}>
            <KeyboardBackspaceIcon fontSize="small" />
          </Fab>
          <h2>{title} - трейлер</h2>
          <iframe
            src={`https://www.youtube.com/embed/${this.props.match.params.trailerLink}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default TrailerPage;
