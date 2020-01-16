import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import "../Styles/Header.scss";
import logoTheme from "../Images/logo-theme.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      showMenuContent: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => {
      return {
        menuActive: !prevState.menuActive
      };
    });
    if (this.state.showMenuContent === false) {
      setTimeout(() => {
        this.setState(prevState => {
          return {
            showMenuContent: !prevState.showMenuContent
          };
        });
      }, 200);
    } else if (this.state.showMenuContent === true) {
      this.setState(prevState => {
        return {
          showMenuContent: !prevState.showMenuContent
        };
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div
          className="back-blur"
          style={
            this.state.menuActive
              ? { backgroundColor: "hsla(0, 0%, 0%, 0.75)", zIndex: 9998 }
              : { backgroundColor: "hsla(0, 0%, 0%, 0)", zIndex: -9999 }
          }
          onClick={this.toggleMenu}
        ></div>
        <div
          className="menu"
          style={this.state.menuActive ? { width: 308 } : { width: 0 }}
        >
          {this.state.showMenuContent && (
            <div className="close-button">
              <Fab className="close-fab" size="small" onClick={this.toggleMenu}>
                <CloseIcon fontSize="small" />
              </Fab>
            </div>
          )}
        </div>
        <div className="contorls">
          <Button
            style={{ height: "100%", outline: "none" }}
            onClick={this.toggleMenu}
          >
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <h1>Кинотеатр имени Маяковского</h1>
        </div>
        <div className="logo">
          <img src={logoTheme} className="logo-img"></img>
        </div>
      </header>
    );
  }
}
