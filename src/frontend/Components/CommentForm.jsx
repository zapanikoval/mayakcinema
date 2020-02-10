import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "hsl(71, 100%, 87%)"
    },
    primary: {
      main: "hsl(71, 100%, 87%)"
    }
  }
});

export default class CommentForm extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="comments-form">
          <div className="user-img"></div>
          <form className="form" onSubmit={this.props.onSubmit}>
            <TextField
              label="Комментарий"
              multiline
              rows="4"
              color="primary"
              fullWidth
              className="text-field"
              onChange={this.props.onChange}
              name={this.props.name}
              value={this.props.value}
            />
            <Button
              type="submit"
              color="primary"
              style={{
                outlineColor: "hsl(71, 100%, 87%)",
                marginTop: 10,
                alignSelf: "flex-end"
              }}
            >
              {this.props.isUpdating ? "Сохранить" : "Отправить"}
            </Button>
          </form>
        </div>
      </ThemeProvider>
    );
  }
}
