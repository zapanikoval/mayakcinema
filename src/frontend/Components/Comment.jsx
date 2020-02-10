import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneSharpIcon from "@material-ui/icons/DoneSharp";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prev => {
      return {
        isDeleting: !prev.isDeleting
      };
    });
  }

  render() {
    const allowDeleting = this.props.isAdmin || this.props.isSender;
    return (
      <div className="comment">
        <div className="user-img"></div>
        <div className="comment-body">
          <span className="sender">
            {this.props.sender} <span>{this.props.date}</span>
          </span>
          <div className="text">{this.props.body}</div>
        </div>
        {allowDeleting &&
          (!this.state.isDeleting ? (
            <div className="edit-block">
              <IconButton className="edit-btn" onClick={this.handleToggle}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                className="edit-btn"
                onClick={() => {
                  this.props.getCommentBodyForUpdate({
                    body: this.props.body,
                    id: this.props.commentId
                  });
                }}
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            </div>
          ) : (
            <div className="confirm-delete">
              <IconButton className="deleting-btn" onClick={this.handleToggle}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                className="deleting-btn"
                onClick={() => {
                  this.props.deleteComment({
                    filmId: this.props.filmId,
                    commentId: this.props.commentId
                  });
                }}
              >
                <DoneSharpIcon fontSize="inherit" />
              </IconButton>
            </div>
          ))}
      </div>
    );
  }
}
