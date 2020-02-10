import React from "react";

import "../Styles/TrailerCollapse.scss";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default class TrailerCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIcon: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prev => {
      return {
        toggleIcon: !prev.toggleIcon
      };
    });
  }

  render() {
    return (
      <>
        <h4>
          <Button
            className="open-button"
            type="button"
            data-toggle="collapse"
            data-target="#collapse"
            aria-expanded="false"
            aria-controls="collapse"
            variant="contained"
            color="default"
            style={{ outline: "none" }}
            onClick={this.handleToggle}
            endIcon={
              this.state.toggleIcon ? (
                <ExpandMoreIcon style={{ fontSize: "40px" }} />
              ) : (
                <ExpandLessIcon style={{ fontSize: "40px" }} />
              )
            }
          >
            Трейлер
          </Button>
        </h4>

        <iframe
          title={this.props.link}
          className="youtube-player collapse multi-collapse"
          id="collapse"
          src={`https://www.youtube.com/embed/${this.props.link}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </>
    );
  }
}
