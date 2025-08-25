import './FutureCard.css';

export default function FutureCard({ temp, timeState, dt, icon }) {
   const time = new Date(dt * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
   });
   return (
      <div className='future-card'>
         <p>{time}</p>
         <span className='separator' />
         <span className='time-state'>
            <img
               src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
               alt={timeState}
            />
            <p>{timeState}</p>
         </span>
         <h2 style={{ margin: 0 }}>{temp}°</h2>
      </div>
   );
}
