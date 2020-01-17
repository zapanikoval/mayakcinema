import React from "react";
import Fab from "@material-ui/core/Fab";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import "../Styles/FilmInfo.scss";

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-info">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="container-info">
          <Fab size="small" className="btn-back">
            <KeyboardBackspaceIcon fontSize="small" />
          </Fab>
          <img
            className="film-poster"
            src="https://moemisto.ua/img/cache/event_huge/event/0004/60/83d92dca8906c193ab053c307e1f84f0b2e0445a.jpeg?hash=2019-12-23-00-01-45"
          />
          <h1>Шпион под прикрытием</h1>
          <div className="film-info">
            <div className="info">
              <p>
                <span>Возраст:</span> 0+
              </p>
              <p>
                <span>Оригинальное название:</span> Spies in Disguise
              </p>
              <p>
                <span>Режисер:</span> Ник Бруно, Трой Квон
              </p>
              <p>
                <span>Период проката:</span> 25.12.2019 - 22.01.2020
              </p>
              <p>
                <span>Рейтинг Imdb:</span> 6.8
              </p>
              <p>
                <span>Жанр:</span> Анимация, Приключения, Мультфильм, Комедия
              </p>
              <p>
                <span>Длительность:</span> 1:42
              </p>
              <p>
                <span>Студия:</span> 20th Century Fox
              </p>
              <p>
                <span>В главных ролях:</span> Том Холланд, Уилл Смит
              </p>
            </div>
            <div className="description">
              Ленс Стерлинг - самый крутой шпион в мире. Дерзкий, обаятельный, с
              супер возможностями. Его дело - спасать мир. И никто не сделает
              этого лучше. Почти полной противоположностью является Уолтер.
              Уолтер имеет светлую голову, но не очень общительным. Впрочем,
              отсутствие коммуникабельности он компенсирует интеллектом и
              изобретательностью. Уолтер - научный гений, изобретает различные
              гаджеты, которые Ленс использует в своих миссиях. Однако, когда
              события делают неожиданный поворот, Уолтер и Ленс вдруг вынуждены
              полагаться друг на друга в совершенно новый способ. И, если эта
              странная парочка не научится работать в команде, весь мир окажется
              под смертельной угрозой.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmInfo;
