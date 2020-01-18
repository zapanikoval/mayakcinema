import React from "react";
import "../Styles/FilmCard.scss";
import Fab from "@material-ui/core/Fab";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { NavLink } from "react-router-dom";

class FilmCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false
    };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter() {
    this.setState({
      focus: true
    });
  }
  handleLeave() {
    this.setState({
      focus: false
    });
  }

  render() {
    return (
      <div
        className="film-card"
        style={{ backgroundImage: `url(${this.props.smallPoster})` }}
      >
        <div
          className="blur"
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
        >
          {this.state.focus && (
            <div className="controls">
              <Fab className="control-button">
                <NavLink to={`/film/${this.props.id}`} className="a-link">
                  <InfoOutlinedIcon fontSize="large" />
                </NavLink>
              </Fab>
              <Fab className="control-button">
                <NavLink
                  to={`./trailer/${this.props.trailerLink}`}
                  className="a-link"
                >
                  <PlayArrowIcon fontSize="large" />
                </NavLink>
              </Fab>
            </div>
          )}

          <h3 className="title"> {this.props.name}</h3>
          {this.props.type === "soon" && this.state.focus && (
            <h2 className="title">{this.props.releaseDate}</h2>
          )}
        </div>
      </div>
    );
  }
}

export default FilmCard;
