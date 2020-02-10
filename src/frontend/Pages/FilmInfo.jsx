import React from "react";
import Fab from "@material-ui/core/Fab";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import TrailerCollapse from "../Components/TrailerCollapse";
import CommentForm from "../Components/CommentForm";
import Comment from "../Components/Comment";

import "../Styles/FilmInfo.scss";
import { connect } from "react-redux";
import {
  getFilm as getReleaseFilm,
  addComment as addReleaseComment,
  deleteComment as deleteReleaseComment,
  editComment as editReleaseComment,
  rateFilm as rateReleaseFilm
} from "../Redux/Actions/releaseFilms/actions";
import {
  getFilm as getSoonFilm,
  addComment as addSoonComment,
  deleteComment as deleteSoonComment,
  editComment as editSoonComment,
  rateFilm as rateSoonFilm
} from "../Redux/Actions/soonFilms/actions";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timezone: "UTC"
};

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      comment: "",
      lockBackBtn: false,
      isUpdating: false,
      updatingCommentId: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.getCommentBodyForUpdate = this.getCommentBodyForUpdate.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onDislike = this.onDislike.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
    this.setState({ lockBackBtn: true });
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSend(e) {
    e.preventDefault();
    if (this.props.auth.userName) {
      if (this.state.comment !== "") {
        const comment = {
          senderName: this.props.auth.userName,
          body: this.state.comment,
          date: new Date().toLocaleString("ru", dateOptions)
        };
        this.props.type === "release"
          ? this.props.dispatch(
              addReleaseComment({ id: this.props.match.params.filmId, comment })
            )
          : this.props.dispatch(
              addSoonComment({ id: this.props.match.params.filmId, comment })
            );
        this.setState({ comment: "" });
      }
    } else this.props.history.push("/auth/login");
  }

  componentDidMount() {
    if (this.props.film._id === undefined) {
      if (this.props.type === "release") {
        this.props.dispatch(getReleaseFilm(this.props.match.params.filmId));
      } else if (this.props.type === "soon") {
        this.props.dispatch(getSoonFilm(this.props.match.params.filmId));
      }
    }
  }

  deleteComment(params) {
    if (this.props.auth.userName) {
      if (this.props.type === "release") {
        this.props.dispatch(deleteReleaseComment(params));
      } else {
        this.props.dispatch(deleteSoonComment(params));
      }
    } else this.props.history.push("/auth/login");
  }

  updateComment(e) {
    e.preventDefault();
    if (
      this.props.auth.userName &&
      this.state.comment !== "" &&
      this.state.isUpdating
    ) {
      const comment = {
        _id: this.state.updatingCommentId,
        senderName: this.props.auth.userName,
        body: this.state.comment,
        date: new Date().toLocaleString("ru", dateOptions)
      };
      const params = {
        comment,
        filmId: this.props.film._id
      };
      this.props.type === "release"
        ? this.props.dispatch(editReleaseComment(params))
        : this.props.dispatch(editSoonComment(params));
      this.setState({ comment: "", isUpdating: false });
    }
  }

  getCommentBodyForUpdate(params) {
    this.setState({
      comment: params.body,
      isUpdating: true,
      updatingCommentId: params.id
    });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: "FILM_INFO_RESET" });
  }

  onLike() {
    if (this.props.auth.userName) {
      if (this.props.type === "release") {
        this.props.dispatch(
          rateReleaseFilm({ type: "like", filmId: this.props.film._id })
        );
      } else if (this.props.type === "soon") {
        this.props.dispatch(
          rateSoonFilm({ type: "like", filmId: this.props.film._id })
        );
      }
    } else this.props.history.push("/auth/login");
  }
  onDislike() {
    if (this.props.auth.userName) {
      if (this.props.type === "release") {
        this.props.dispatch(
          rateReleaseFilm({ type: "dislike", filmId: this.props.film._id })
        );
      } else if (this.props.type === "soon") {
        this.props.dispatch(
          rateSoonFilm({ type: "dislike", filmId: this.props.film._id })
        );
      }
    } else this.props.history.push("/auth/login");
  }

  render() {
    const { film } = this.props;
    let likes, dislikes;
    let isLiked, isDisliked;
    if (film.rates) {
      likes = film.rates.filter(rate => rate.type === "like");
      dislikes = film.rates.filter(rate => rate.type === "dislike");
      film.rates.forEach(rate => {
        if (rate.user === this.props.auth.userName) {
          if (rate.type === "like") isLiked = true;
          else if (rate.type === "dislike") isDisliked = true;
        }
      });
    }

    if (film._id !== undefined)
      return (
        <div className="body-info">
          <div className="background-image"></div>
          <div className="background-blur"></div>
          <div className="container-info">
            <Fab
              size="small"
              className="btn-back"
              onClick={this.handleClick}
              disabled={this.state.lockBackBtn}
            >
              <KeyboardBackspaceIcon fontSize="small" />
            </Fab>

            <img
              className="film-poster"
              src={film.fullPoster}
              alt={film.name}
            />
            <h1>{film.name}</h1>
            <div className="film-info">
              <div className="info">
                {film.yearLimit && (
                  <p>
                    <span>Возраст:</span> {film.yearLimit}
                  </p>
                )}

                <p>
                  <span>Оригинальное название:</span> {film.originalName}
                </p>
                <p>
                  <span>Режисер:</span> {film.producer}
                </p>
                {film.type === "soon" ? (
                  <p>
                    <span>Релиз: </span>
                    {film.releaseDate}
                  </p>
                ) : (
                  <p>
                    <span>Период проката:</span> {film.releaseTime}
                  </p>
                )}

                {film.rate && (
                  <p>
                    <span>Рейтинг Imdb:</span> {film.rate}
                  </p>
                )}
                <p>
                  <span>Жанр:</span> {film.style}
                </p>
                {film.type !== "soon" && (
                  <p>
                    <span>Длительность:</span> {film.time}
                  </p>
                )}

                <p>
                  <span>Студия:</span> {film.studio}
                </p>
                <p>
                  <span>В главных ролях:</span> {film.mainRoles}
                </p>
              </div>
              <div className="description">{film.description}</div>
            </div>
            <h4>Оцените фильм</h4>
            <div className="rate">
              <div className="fab-likes">
                <Fab
                  className={`rate-btn like ${isLiked && "active-like"}`}
                  onClick={this.onLike}
                  disabled={isLiked}
                >
                  <ThumbUpIcon />
                </Fab>
                <Fab
                  className={`rate-btn like ${isDisliked && "active-dislike"}`}
                  size="small"
                  onClick={this.onDislike}
                  disabled={isDisliked}
                >
                  <ThumbDownIcon fontSize="inherit" />
                </Fab>
              </div>
              <div className="count-likes">
                <span className="badge badge-pill likes">{likes.length}</span>
                <span className="badge badge-pill dislikes">
                  {dislikes.length}
                </span>
              </div>
            </div>
            <TrailerCollapse link={film.link} />
            <div className="comments">
              <h5>Отзывы о фильме {film.name}</h5>
              <div className="comments-body">
                <CommentForm
                  onChange={this.handleChange}
                  onSubmit={
                    this.state.isUpdating ? this.updateComment : this.handleSend
                  }
                  name="comment"
                  value={this.state.comment}
                  isUpdating={this.state.isUpdating}
                />

                <div className="all-comments">
                  {film.comments[0] ? (
                    film.comments.map(comment => (
                      <Comment
                        sender={comment.senderName}
                        date={comment.date}
                        body={comment.body}
                        key={comment._id}
                        filmId={film._id}
                        commentId={comment._id}
                        deleteComment={this.deleteComment}
                        isAdmin={this.props.auth.role === "admin"}
                        isSender={
                          this.props.auth.userName === comment.senderName
                        }
                        getCommentBodyForUpdate={this.getCommentBodyForUpdate}
                      />
                    ))
                  ) : (
                    <h2 className="non-comments">Комментариев пока нет</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    else {
      return (
        <div className="body-info">
          <div className="background-image"></div>
          <div className="background-blur"></div>
          <div
            className="container-info"
            style={{ height: "calc(100vh - 80px)", justifyContent: "center" }}
          >
            <Fab size="small" className="btn-back" onClick={this.handleClick}>
              <KeyboardBackspaceIcon fontSize="small" />
            </Fab>
            <div className="loading">
              <span>Loading... </span>
              <div className="spinner-grow" role="status"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    film: state.filmInfoState,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(FilmInfo);
