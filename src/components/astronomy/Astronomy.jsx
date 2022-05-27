import astronomyChart from "../../assets/astronomyChart.svg";
import { WiBarometer } from "react-icons/wi";
import { useEffect, useState } from "react";
import AstroCard from "./AstroCard";
import DailyWeather from "./DailyWeather";
function Astronomy({ location, time, city, wind, dailyWeather }) {
  const [astro, setAstro] = useState([]);

  useEffect(() => {
    async function getAstronomy() {
      const response = await fetch(
        `http://api.weatherapi.com/v1/astronomy.json?key=743698db963a4478a4b73640220405&q=${city}&dt=${time}`
      );
      const data = await response.json();
      setAstro([
        data.astronomy.astro.sunrise,
        data.astronomy.astro.sunset,
        data.astronomy.astro.moonrise,
        data.astronomy.astro.moonset,
      ]);
    }
    getAstronomy();
  }, [city, time]);

  return (
    <div className="flex flex-col  md:flex-col items-center lg:justify-between">
      <div className="flex">
        <h2 className="font-bold text-gray-900">Astronomy of {location} </h2>
        <WiBarometer className="text-[#5D83FF] w-[24px] h-[24px]" />
      </div>
      <div className="flex justify-center  items-center mt-4 relative w-[250px]">
        <img src={astronomyChart} alt="chart" />
        <div className="absolute flex flex-col bottom-[-50px] left-0 text-center">
          <span className="text-sm">sunrise</span>
          <span className="text-sm text-gray-500">{astro[0]}</span>
        </div>
        <div className="absolute flex flex-col bottom-[-50px] right-0 text-center">
          <span className="text-sm">sunset</span>
          <span className="text-sm text-gray-500">{astro[1]}</span>
        </div>
      </div>
      {wind && <AstroCard moonRise={astro[2]} moonSet={astro[3]} wind={wind} />}
      {/* weather prediction section */}
      <div className="w-full">
        <h2 className="font-bold text-center my-6 mt-10">Weather prediction</h2>
        {dailyWeather.slice(1).map((weather, index) => (
          <DailyWeather
            temp={weather.temp}
            key={index}
            icon={weather.icon}
            date={weather.date}
            state={weather.state}
          />
        ))}
      </div>
    </div>
  );
}

export default Astronomy;
