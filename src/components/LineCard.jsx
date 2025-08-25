import "./LineCard.css";

const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export default function LineCard({ dt, timeState, temp, icon }) {
  const day = new Date(dt * 1000).getDay() - 1;
  return (
    <li className="line-card">
      <h3>{DAYS[day]}</h3>
      <span>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={timeState} />
        {timeState}
      </span>
      <p>{temp}</p>
    </li>
  );
}
