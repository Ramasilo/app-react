import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="input-group rounded">
            <form id="search-form">
              <input
                type="text"
                placeholder="Search"
                autocomplete="off"
                autofocus="on"
                id="search-city"
              />
              <button type="submit" id="search-button">
                Search
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="city" id="city">
                Johannesburg
              </div>
              <div className="day-time" id="time">
                Tuesday 22:00
              </div>
              <div className="day-details" id="day-details">
                Clear with periodic clouds
              </div>
            </div>
            <div className="col-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sun"
                className="sun"
              />
            </div>
            <div className="col-2">
              <div className="temperature" id="temperature">
                17
              </div>
            </div>
            <div className="col-2">
              <div className="degree">
                <a href="foo">°C </a> | <a href="foo">°F</a>
              </div>
            </div>
            <div className="col-2">
              <div className="humidity">Humidity:62%</div>
              <div className="wind">Wind:14km/h</div>
            </div>
          </div>
        </div>
      </div>

      <p>
        <a href="https://github.com/Ramasilo/app-react"> Open-source code </a>
        by Precious Ramasilo
      </p>
    </div>
  );
}
