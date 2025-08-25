import "./SummaryCard.css";

export default function SummaryCard({
  temp,
  timeState,
  cityName,
  st,
  speed,
  min,
  max,
  icon,
}) {
  const time = new Date().toLocaleTimeString();
  return (
    <div className="card">
      <h1>{temp}</h1>
      <span>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={timeState}
        />
        {timeState}
      </span>
      <p>{st}°</p>
      <div>
        <h2>{cityName}</h2>
        <h3>{time}</h3>
      </div>
      <span>
        <img src="./wind.png" alt="Wind" />
        {speed} m/s
      </span>
      <p>
        {min}° to {max}°
      </p>
    </div>
  );
}
