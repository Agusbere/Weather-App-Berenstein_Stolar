// import use
import { useEffect, useState } from 'react';
import SummaryCard from './components/SummaryCard';
import getWeather from './modules/API';
import FutureCard from './components/FutureCard';
import './App.css';
import LineCard from './components/LineCard';
import SearchInput from './components/SearchInput';
import CityCard from './components/CityCard';

function App() {
   const [data, setData] = useState(null);
   useEffect(() => {
      const q = new URLSearchParams(window.location.search);
      const city = q.get('city');
      if (!city) location.href = '/?city=Helsinki';
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
         <SearchInput />
         <div style={{ display: 'flex', gap: 40 }}>
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
            <div className='period'>
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
         <div style={{ display: 'flex', gap: 40, width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
               <h1 style={{ color: 'white' }}>Other large cities</h1>
               {new Array(3).fill('GUSO').map(() => (
                  <CityCard icon='01d' />
               ))}
            </div>
            <div
               className='period'
               style={{ flexDirection: 'column', flex: 1 }}
            >
               <h1 style={{ color: 'white' }}>5-day forecast</h1>
               {data.list
                  .filter((e) => e.dt_txt.includes('12:00'))
                  .map((e) => (
                     <LineCard
                        dt={e.dt}
                        temp={e.main.temp}
                        timeState={e.weather[0].main}
                        icon={e.weather[0].icon}
                     />
                  ))}
            </div>
         </div>
      </>
   );
}

export default App;
