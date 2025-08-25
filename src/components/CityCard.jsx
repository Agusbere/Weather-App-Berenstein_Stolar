import './CityCard.css';

export default function CityCard({ icon }) {
   return (
      <div className='city-card'>
         <div>
            <p>us</p>
            <h1>New York</h1>
            <p>Clear sky</p>
         </div>
         <span>
            <img
               src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
               alt=''
            />
         </span>
      </div>
   );
}
