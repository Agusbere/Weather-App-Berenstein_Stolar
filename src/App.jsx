// import use
import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import getWeather from "./modules/API";
import FutureCard from "./components/FutureCard";
import "./App.css";
import LineCard from "./components/LineCard";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const city = q.get("city");
    if (!city) location.href = "/?city=Helsinki";
    setData(getWeather());
    console.log(getWeather());
  }, []);
  // const params = usepara
  if (!data)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <SummaryCard
          cityName={data.city.name}
          max={data.list[0].main.temp_max}
          min={data.list[0].main.temp_min}
          speed={data.list[0].wind.speed}
          st={data.list[0].main.feels_like}
          temp={data.list[0].main.temp}
          timeState={data.list[0].weather[0].main}
          icon={data.list[0].weather[0].icon}
        />
        <div className="period">
          {data.list.map((e) => (
            <FutureCard
              dt={e.dt}
              temp={e.main.temp}
              timeState={e.weather[0].main}
              icon={e.weather[0].icon}
            />
          ))}
        </div>
      </div>
      <br />
      <div className="period">
        {data.list
          .filter((e) => e.dt_txt.includes("12:00"))
          .map((e) => (
            <LineCard
              dt={e.dt}
              temp={e.main.temp}
              timeState={e.weather[0].main}
              icon={e.weather[0].icon}
            />
          ))}
      </div>
    </>
  );
}

export default App;
