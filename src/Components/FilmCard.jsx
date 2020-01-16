import React from "react";
import "../Styles/FilmCard.scss";
import Fab from "@material-ui/core/Fab";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

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
      <div className="film-card">
        <div
          className="blur"
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
        >
          {this.state.focus && (
            <div className="controls">
              <Fab className="control-button">
                <InfoOutlinedIcon fontSize="large" />
              </Fab>
              <Fab className="control-button">
                <PlayArrowIcon fontSize="large" />
              </Fab>
            </div>
          )}
          <h3 className="title">Шпионы под прикрытием</h3>
        </div>
      </div>
    );
  }
}

export default FilmCard;
