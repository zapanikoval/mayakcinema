import React from "react";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";

import "../Styles/SettingsCard.scss";

export default class SettingsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      buttonSize: "large",
      isDeleting: false,
      goDeleting: false
    };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.removeFilm = this.removeFilm.bind(this);
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

  handleDelete() {
    this.setState(prevState => {
      return {
        isDeleting: !prevState.isDeleting
      };
    });
  }

  removeFilm() {
    this.setState({
      goDeleting: true
    });
    setTimeout(() => {
      this.props.removeFilm({ id: this.props.id, type: this.props.type });
    }, 1500);
  }

  handleClick() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    const { buttonSize } = this.state;
    return (
      <div
        className="settings-card"
        style={{ backgroundImage: `url(${this.props.img})` }}
        onMouseOver={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div className="blur">
          {this.state.focus && (
            <div className="controls">
              <Fab className="control-button update" onClick={this.handleClick}>
                <NavLink
                  to={`/update/${this.props.type}/${this.props.id}`}
                  className="a-link"
                >
                  <RefreshIcon fontSize={buttonSize} />
                </NavLink>
              </Fab>
              {!this.state.isDeleting ? (
                <Fab
                  className="control-button delete"
                  onClick={this.handleDelete}
                >
                  <DeleteForeverIcon fontSize={buttonSize} />
                </Fab>
              ) : !this.state.goDeleting ? (
                <div>
                  <Fab
                    className="control-button yes"
                    size="medium"
                    onClick={this.removeFilm}
                  >
                    <CheckIcon />
                  </Fab>
                  <Fab
                    className="control-button no"
                    size="medium"
                    onClick={this.handleDelete}
                  >
                    <CloseIcon />
                  </Fab>
                </div>
              ) : (
                <div className="deleting-block">
                  <div className="deleting-text">Удаление</div>
                  <div className="spinner-grow" role="status"></div>
                </div>
              )}
            </div>
          )}
          {this.state.focus && <h3 className="title">{this.props.title}</h3>}
        </div>
        {!this.state.focus && <h3 className="title">{this.props.title}</h3>}
      </div>
    );
  }
}
