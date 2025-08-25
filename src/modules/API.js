const getWeather = async (city) => {
   const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=97546f462503db586745b17c90160547&units=metric`
   );
   if (res.status === 404) return null;
   return await res.json();
};

export default getWeather;
