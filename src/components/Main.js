import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [searchText, setSearchText] = useState("ankara");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");

  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  const getWeather = async () => {
    try {
      const { data } = await axios(url);
      console.log("data :>> ", data);
      const isexist = weatherData.some(
        (item) => item.name.toLowerCase() === searchText.toLowerCase()
      );
      isexist
        ? setError("This city has been entered before.")
        : setWeatherData([...weatherData, data]);
      console.log("isexist", isexist);
      setTimeout(() => {
        setError("");
      }, 2000);
    } catch (error) {
      setError("Please enter a valid city name.");
    }
  };
  console.log("weatherData", weatherData);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText ? getWeather() : setError("Null value cannot be entered.");
    setTimeout(() => {
      setError("");
    }, 2000);
    setSearchText("");
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search for a city"
          autoFocus
        />
        <button type="submit">SUBMIT</button>
        <span className="msg">{error}</span>
      </form>
      <div className="container">
        <ul className="cities">
          {weatherData.map((item, index) => {
            return <WeatherCard item={item} key="index" />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
