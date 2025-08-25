import './SummaryCard.css';

export default function SummaryCard({
   temp,
   timeState,
   cityName,
   st,
   speed,
   min,
   max,
   icon
}) {
   const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
   });
   return (
      <div className='card'>
         <h1>{temp}°</h1>
         <span className='time-state'>
            <img
               src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
               alt={timeState}
            />
            {timeState}
         </span>
         <p>Feel like: {st} °C</p>
         <div className='city'>
            <h2>{cityName}</h2>
            <h3>{time}</h3>
         </div>
         <span className='wind'>
            <img src='./wind.png' alt='Wind' />
            {speed} m/s
         </span>
         <p style={{ textAlign: 'end' }}>
            {min}° to {max}°
         </p>
      </div>
   );
}
