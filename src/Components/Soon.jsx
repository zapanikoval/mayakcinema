import React from "react";
import "../Styles/Release.scss";
import FilmCard from "./FilmCard";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import films from "./films";

class Soon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScrollVisible: false,
      rightScrollVisible: true
    };
    this.rightScroll = this.rightScroll.bind(this);
    this.leftScroll = this.leftScroll.bind(this);
    //  this.handleScroll = this.handleScroll.bind(this);
  }

  rightScroll() {
    const width = 306;
    let currentWidth = 0;
    const interval = setInterval(() => {
      if (currentWidth <= width) {
        this.refs.content.scrollBy(4, 0);
        currentWidth += 4;
      } else clearInterval(interval);
    }, 0.00001);
    if (
      this.refs.content.scrollLeft + 308 ===
      this.refs.content.scrollWidth - window.innerWidth
    ) {
      this.setState({
        rightScrollVisible: false,
        leftScrollVisible: true
      });
    } else {
      this.setState({
        rightScrollVisible: true,
        leftScrollVisible: true
      });
    }
  }
  leftScroll() {
    const width = -306;
    let currentWidth = 0;
    const interval = setInterval(() => {
      if (currentWidth >= width) {
        this.refs.content.scrollBy(-4, 0);
        currentWidth -= 4;
      } else clearInterval(interval);
    }, 0.00001);
    if (this.refs.content.scrollLeft - 308 === 0) {
      this.setState({
        rightScrollVisible: true,
        leftScrollVisible: false
      });
    } else {
      this.setState({
        rightScrollVisible: true,
        leftScrollVisible: true
      });
    }
  }

  render() {
    return (
      <div className="content" ref="content">
        {this.state.leftScrollVisible && (
          <div className="back">
            <Fab className="button" onClick={this.leftScroll}>
              <ArrowBackIcon fontSize="large" />
            </Fab>
          </div>
        )}
        {films.map(
          film =>
            film.type === "soon" && (
              <FilmCard
                smallPoster={film.smallPoster}
                releaseDate={film.releaseDate}
                type="soon"
                name={film.name}
                id={film.id}
                key={film.id}
              />
            )
        )}
        {this.state.rightScrollVisible && (
          <div className="forward">
            <Fab className="button" onClick={this.rightScroll}>
              <ArrowForwardIcon fontSize="large" />
            </Fab>
          </div>
        )}
      </div>
    );
  }
}

export default Soon;
