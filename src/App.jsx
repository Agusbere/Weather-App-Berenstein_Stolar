// import use
import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import getWeather from "./modules/API";

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
      <SummaryCard
        cityName={data.name}
        max={data.main.temp_max}
        min={data.main.temp_min}
        speed={data.wind.speed}
        st={data.main.feels_like}
        temp={data.main.temp}
        timeState={data.weather[0].main}
      />
    </>
  );
}

export default App;
