import React from "react";
import "../Styles/Release.scss";
import FilmCard from "../Components/FilmCard";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { connect } from "react-redux";

class Release extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScrollVisible: false,
      rightScrollVisible: true
    };
    this.rightScroll = this.rightScroll.bind(this);
    this.leftScroll = this.leftScroll.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
  }

  rightScroll() {
    this.refs.content.scrollBy({
      left: 300,
      behavior: "smooth"
    });
    const scrollWidth = this.refs.content.scrollWidth - window.innerWidth;
    if (this.refs.content.scrollLeft + 300 >= scrollWidth) {
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
    this.refs.content.scrollBy({
      left: -300,
      behavior: "smooth"
    });
    if (this.refs.content.scrollLeft - 300 <= 0) {
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

  handleWheel(e) {
    e.persist();

    if (e.deltaY > 0) {
      this.rightScroll();
    } else if (e.deltaY < 0) {
      this.leftScroll();
    }
  }

  render() {
    const { films } = this.props;

    if (films !== undefined)
      return (
        <div className="content" ref="content" onWheel={this.handleWheel}>
          {this.state.leftScrollVisible && (
            <div className="back">
              <Fab className="button" onClick={this.leftScroll}>
                <ArrowBackIcon fontSize="large" />
              </Fab>
            </div>
          )}
          {films.map(
            film =>
              film.type === "inRelease" && (
                <FilmCard
                  trailerLink={film.link}
                  smallPoster={film.smallPoster}
                  type="release"
                  name={film.name}
                  id={film._id}
                  key={film._id}
                  dispatch={this.props.dispatch}
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
    else return <h1 style={{ color: "white" }}>Loading...</h1>;
  }
}

function mapStateToProps(state) {
  return {
    films: state.releaseFilmState
  };
}

export default connect(mapStateToProps)(Release);
