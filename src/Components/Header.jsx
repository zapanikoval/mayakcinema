import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "../Styles/Header.scss";
import logoTheme from "../Images/logo-theme.png";

export default function Header(props) {
  return (
    <header className="header">
      <div className="contorls">
        <Button style={{ height: "100%" }}>
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
