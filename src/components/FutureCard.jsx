import "./FutureCard.css";

export default function FutureCard({ temp, timeState, dt, icon }) {
  const time = new Date(dt * 1000).toLocaleTimeString();
  return (
    <div className="future-card">
      <p>{time}</p>
      <span>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={timeState}
        />
        {timeState}
      </span>
      <h2>{temp}</h2>
    </div>
  );
}
