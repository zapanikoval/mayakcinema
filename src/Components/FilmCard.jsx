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
  }

  render() {
    const { buttonSize } = this.state;

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
              <Fab className="control-button" onClick={this.handleClick}>
                <NavLink to={`/film/${this.props.id}`} className="a-link">
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
          <h3 className="title"> {this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default FilmCard;
