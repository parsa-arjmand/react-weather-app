import Widget from "./Widget";
import CityData from "./CityData";

function WeatherCard({ location, weatherDesc }) {
  const [state, temp, feelsLike, humidity, pressure, update, icon] =
    weatherDesc;

  return (
    // weather card
    <div className="bg-[#2c64ff] md:w-[19rem] w-[22rem] sm-[22rem] h-52 bg-cover bg-left-top bg-no-repeat p-4 flex flex-col justify-between rounded-xl shadow-sm">
      <CityData update={update} temp={temp} state={state} icon={icon} />
      <div className="flex items-center justify-between text-sm  text-white">
        <Widget condition={humidity} conditionNm="Humidity" />
        <Widget condition={feelsLike} conditionNm="Feels Like" />
        <Widget condition={pressure} conditionNm="Pressure" />
      </div>
    </div>
  );
}

export default WeatherCard;
