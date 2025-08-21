import "./SummaryCard.css";

export default function SummaryCard({
  temp,
  timeState,
  cityName,
  st,
  speed,
  min,
  max,
}) {
  const time = new Date().toLocaleTimeString();
  return (
    <div className="card">
      <h1>{temp}</h1>
      <span>{timeState}</span>
      <p>{st}°</p>
      <div>
        <h2>{cityName}</h2>
        <h3>{time}</h3>
      </div>
      <span>{speed} m/s</span>
      <p>
        {min}° to {max}°
      </p>
    </div>
  );
}
