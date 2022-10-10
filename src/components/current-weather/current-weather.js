import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <img
          className="weather-icon"
          alt="weather-icon"
          src={`icons/${data.weather[0].icon}.jpg`}
        />
      </div>

      <div className="middle">
        <div className="temp">
          <p>{Math.round(data.main.temp)}°C</p>
          <div className="temp-details">
            <p>
              <i class="fa-solid fa-temperature-arrow-down"></i> &nbsp; {Math.round(data.main.temp_min)}°C
            </p>
            <p>
              <i class="fa-solid fa-temperature-arrow-up"></i> &nbsp; {Math.round(data.main.temp_max)}°C
            </p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="weather-description">
          <p>{data.weather[0].description}</p>
          <div className="weather-details">
            <p>
              <i class="fa-solid fa-temperature-high"></i> Feels Like {Math.round(data.main.feels_like)}°C
            </p>
            <p>
              <i class="fa-solid fa-wind"></i> Wind {data.wind.speed}m/s
            </p>
            <p>
              <i class="fa-solid fa-droplet"></i> Humidity {data.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
