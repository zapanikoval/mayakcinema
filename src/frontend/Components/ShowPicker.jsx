import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";

import "../Styles/ShowPicker.scss";

export default class ShowPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      today: format(Date.now(), "dd.MM.yyyy")
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prev => {
      return {
        isOpen: !prev.isOpen
      };
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="show-picker">
        <h5>Забронировать билет:</h5>
        <div className="controls">
          <div className="pick-btn" onClick={this.toggleMenu}>
            17.02.2020
          </div>
          <Zoom in={isOpen}>
            <div className="date-picker">
              <span className="tip">Выберите день:</span>
              <div className="date" onClick={this.toggleMenu}>
                17.02.2020
                {this.state.today === "17.02.2020" && (
                  <span className="today">Сегодня</span>
                )}
              </div>
              <div className="date" onClick={this.toggleMenu}>
                18.02.2020
              </div>
              <div className="date" onClick={this.toggleMenu}>
                19.02.2020
              </div>
              <div className="date" onClick={this.toggleMenu}>
                20.02.2020
              </div>
            </div>
          </Zoom>
          <div className="shows-time">
            <span className="title">Сеансы:</span>
            <span className="show">14:00</span>
            <span className="show">17:00</span>
            <span className="show">17:30</span>
            <span className="show">18:00</span>
          </div>
        </div>
      </div>
    );
  }
}
