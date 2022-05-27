import HourlyWidget from "./HourlyWidget";
function Forecast({ hourlyWeather }) {
  function renderHourlyWed() {
    hourlyWeather.forEach((weather) => {
      return (
        <HourlyWidget
          temp={weather.temp}
          time={weather.time}
          icon={weather.icon}
        />
      );
    });
  }
  renderHourlyWed();

  return (
    <section className="scrollbar bg-[#fafafa] w-full rounded-lg shadow-sm h-44 my-6 mb-10 flex overflow-x-auto gap-4 items-center px-4 ">
      <h2 className="font-bold text-lg text-gray-900 ">Hourly Weather</h2>
      {hourlyWeather.map((weather, i) => (
        <HourlyWidget
          time={weather.time}
          icon={weather.icon}
          temp={weather.temp}
          key={i}
        />
      ))}
    </section>
  );
}

export default Forecast;
