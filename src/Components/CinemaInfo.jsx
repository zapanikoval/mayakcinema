import React from "react";
import Fab from "@material-ui/core/Fab";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import "../Styles/CinemaInfo.scss";

class CinemaInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="cinema-page">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="container-info">
          <h2>Кинотеатр им. Маяковского</h2>
          <h5>
            Кинотеатр им. Маяковского не зря называют модным и молодежным: он
            находится в самом центре города Запорожье, возле всеми любимого
            бульвара Шевченко.
          </h5>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="http://mayak-kino.zp.ua/_ckshare/images/viber-image-2019-02-16-,-09_45.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Вход в кинотеатр</h5>
                  <p>
                    В нашем кинотеатре всегда только топовые мировые премьеры
                    фильмов, поэтому вы всегда будете в центре интересных
                    киноновинок.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="http://mayak-kino.zp.ua/_ckshare/images/viber-image-2019-02-16-,-09_39--.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Кафе</h5>
                  <p>
                  В ожидании сеанса к вашим услугам удобные диванчики в холле кинотеатра и вместительный бар.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="http://mayak-kino.zp.ua/_ckshare/images/viber-image-2019-02-16-,-09_39.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Хол</h5>
                  <p>
                  Приветливый и отзывчивый персонал всегда рад новым и постоянным посетителям.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CinemaInfo;
