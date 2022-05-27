import Header from "./components/Header";
import WeatherCard from "./components/weatherCard/WeatherCard";
import { useEffect, useState } from "react";
import AirQualityCard from "./components/airQuality/AirQualityCard";
import Forecast from "./components/hourlyWeather/Forecast";
import Astronomy from "./components/astronomy/Astronomy";

function App() {
  const [initial, setInitial] = useState("Mashhad");
  const [location, setLocation] = useState([]);
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [error, setError] = useState();
  //getting data from the search form (extracting data from child comp)
  const searchValue = (value) => setInitial(value.toLowerCase());
  //handeling errors *****************************8start here later

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=743698db963a4478a4b73640220405&q=${initial}&days=3&aqi=yes&alerts=no`
    )
      .then((resp) => {
        //if the user types a city that doesnt exist
        if (!resp.ok) throw new Error();
        //if the user types the correct name after the error happen the error massage dissapears
        else if (resp.ok === true) setError("");
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setLocation([data.location.name, data.location.country]);
        setWeatherDesc([
          data.current.condition.text,
          data.current.temp_c,
          data.current.feelslike_c,
          data.current.humidity,
          data.current.pressure_mb,
          data.current.last_updated,
          data.current.condition.icon,
          data.current.air_quality.pm2_5,
          [
            data.current.wind_kph,
            data.current.wind_degree,
            data.current.wind_dir,
          ],
        ]);
        setHourly(
          data.forecast.forecastday[0].hour.map((weather) => ({
            temp: weather.temp_c,
            day: weather.condition.text,
            time: weather.time.slice(10),
            icon: weather.condition.icon,
          }))
        );
        setDaily(
          data.forecast.forecastday.map((weather) => ({
            temp: weather.day.avgtemp_c,
            icon: weather.day.condition.icon,
            date: weather.date,
            state: weather.day.condition.text,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        setError(
          "no matching location found. please check if you are spelling is correct"
        );
      });
  }, [initial]);

  return (
    <main className="flex lg:flex-col max-w-[1250px] mt-6 lg:w-[90%] mx-auto ">
      {/* left col section */}
      <section className=" ml-[3%] lg:ml-0 w-2/3 lg:w-full">
        <Header searchValue={searchValue} error={error} />
        {/* whole left section minus header */}
        <section className="h-auto flex flex-col mt-8  ">
          {/* city name text */}
          <div className="flex flex-col pb-4">
            <span className="text-2xl font-bold text-gray-800">
              {location[0]}
            </span>
            <span className="text-base text-gray-600">{location[1]}</span>
          </div>
          {/* all cards */}
          <div className=" flex flex-wrap  justify-between sm:justify-center ">
            <WeatherCard location={location} weatherDesc={weatherDesc} />
            <AirQualityCard airQuality={weatherDesc[7]} />
          </div>
          <Forecast hourlyWeather={hourly} />
        </section>
      </section>
      {/* right side bar */}
      <section className="w-1/3 lg:w-full ml-4 lg:ml-0 px-6 lg:px-0 mb-10 ">
        {/* inner section */}
        <div className="bg-[#fafafa] shadow-sm h-full rounded-2xl p-4 pt-6">
          <Astronomy
            location={location[0]}
            time={weatherDesc[5]}
            city={initial}
            wind={weatherDesc[8]}
            dailyWeather={daily}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
