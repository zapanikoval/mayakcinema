import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default class PasswordField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }
  handleClickShowPassword = () => {
    this.setState(prev => {
      return {
        showPassword: !prev.showPassword
      };
    });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  render() {
    return (
      <FormControl
        style={this.props.style}
        fullWidth={!!this.props.fullWidth}
        error={this.props.error}
      >
        <InputLabel htmlFor="standard-adornment-password">
          {this.props.label}
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={this.state.showPassword ? "text" : "password"}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          color={this.props.color}
          autoComplete={this.props.autoComplete}
          aria-describedby="component-helper-text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="component-helper-text">
          {this.props.helperText}
        </FormHelperText>
      </FormControl>
    );
  }
}
