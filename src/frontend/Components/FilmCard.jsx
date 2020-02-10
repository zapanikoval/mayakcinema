import React from "react";
import "../Styles/FilmCard.scss";
import Fab from "@material-ui/core/Fab";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { NavLink } from "react-router-dom";

import { getFilm as getReleaseFilm } from "../Redux/Actions/releaseFilms/actions";
import { getFilm as getSoonFilm } from "../Redux/Actions/soonFilms/actions";

class FilmCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      buttonSize: "large"
    };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  componentDidMount() {
    if (window.innerWidth <= 1024) {
      this.setState({ buttonSize: "" });
    }
  }

  handleClick() {
    window.scrollTo(0, 0);
    if (this.props.type === "release") {
      this.props.dispatch(getReleaseFilm(this.props.id));
    } else if (this.props.type === "soon") {
      this.props.dispatch(getSoonFilm(this.props.id));
    }
  }

  render() {
    const { buttonSize } = this.state;

    return (
      <div
        className="film-card"
        style={{ backgroundImage: `url(${this.props.smallPoster})` }}
        onMouseOver={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div className="blur">
          {this.state.focus && (
            <div className="controls">
              <Fab className="control-button" onClick={this.handleClick}>
                <NavLink
                  to={
                    this.props.type === "release"
                      ? `/release-film/${this.props.id}`
                      : `/soon-film/${this.props.id}`
                  }
                  className="a-link"
                >
                  <InfoOutlinedIcon fontSize={buttonSize} />
                </NavLink>
              </Fab>
              <Fab className="control-button" onClick={this.handleClick}>
                <NavLink
                  to={`./trailer/${this.props.trailerLink}`}
                  className="a-link"
                >
                  <PlayArrowIcon fontSize={buttonSize} />
                </NavLink>
              </Fab>
            </div>
          )}

          {this.props.type === "soon" && this.state.focus && (
            <h2 className="title">{this.props.releaseDate}</h2>
          )}
          {this.state.focus && <h3 className="title"> {this.props.name}</h3>}
        </div>
        {!this.state.focus && <h3 className="title"> {this.props.name}</h3>}
      </div>
    );
  }
}

export default FilmCard;
