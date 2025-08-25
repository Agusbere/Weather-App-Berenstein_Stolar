import './LineCard.css';

const DAYS = [
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
   'Sunday'
];

export default function LineCard({ dt, timeState, temp, icon }) {
   const day = new Date(dt * 1000).getDay() - 1;
   return (
      <li
         className='line-card'
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
         }}
      >
         <h3 style={{ margin: 0, flex: 1 }}>{DAYS[day]}</h3>
         <span style={{ minWidth: 100, flex: 1 }}>
            <img
               src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
               alt={timeState}
            />
            {timeState}
         </span>
         <h3 style={{ margin: 0, flex: 1 }}>{temp}°</h3>
         <div className='bar-container' style={{ flex: 5 }}>
            <div
               className='bar'
               style={{
                  left: 0,
                  width: '100%'
               }}
            ></div>
         </div>
      </li>
   );
}
