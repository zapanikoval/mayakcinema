import React from "react";

import "../Styles/BuyTickets.scss";

class BuyTickets extends React.Component {
  render() {
    const rows = 8;
    const places = 15;
    const price = 90;
    let tickets = matrixArray(rows, places);
    tickets[4][2] = false;

    return (
      <div className="buy-tickets">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="container-info">
          <h2>Покупка билетов</h2>
          <div className="content">
            <div className="small-poster">
              <h3>Камуфляж и шпионаж</h3>
              <h2>11.02, 17:00</h2>
            </div>
            <div className="buy-place">
              <div className="screen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 806 21"
                  fill="#ffffff"
                >
                  <path d="M3.2,20l-2,0.2l-0.3-4l2-0.2C136.2,5.3,269.6,0,403,0s266.8,5.3,400.2,16l2,0.2l-0.3,4l-2-0.2 C669.5,9.3,536.3,4,403,4S136.4,9.3,3.2,20z"></path>
                </svg>
                <p>Экран</p>
              </div>
              <div
                className="places"
                style={{
                  width: `${places * 1.625 - 0.3}em`,
                  height: `${rows * 2.25}em`
                }}
              >
                {tickets.map((row, rowIndex) =>
                  row.map((place, indexPlace) => (
                    <div
                      className={`seat ${place ? "good" : "bad"}`}
                      style={{
                        right: `${1.625 * indexPlace}em`,
                        bottom: `${2.25 * rowIndex}em`
                      }}
                      data-canbuy={place}
                      data-row={rowIndex + 1}
                      data-place={indexPlace + 1}
                      data-price={price}
                    ></div>
                  ))
                )}
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyTickets;

function matrixArray(rows, columns) {
  let arr = new Array();
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array();
    for (let j = 0; j < columns; j++) {
      arr[i][j] = true;
    }
  }
  return arr;
}
