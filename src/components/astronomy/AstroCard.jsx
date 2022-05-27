import moonIcon from "../../assets/2995009_moon_space_night_astronomy_cloud_icon.svg";
import fallmoon from "../../assets/moon2.svg";
import AstroWidget from "./AstroWidget";
import windDirIcon from "../../assets/cloudwind.svg";
import speedIcon from "../../assets/light.svg";
const AstroCard = ({ moonRise, moonSet, wind }) => {
  const [windSpeed, windDegree, windDir] = wind;
  return (
    <div className="mt-20  grid grid-cols-2 gap-4 items-center justify-between   ">
      <AstroWidget
        stateTitle="Moon Rise"
        state={moonRise}
        icon={moonIcon}
        color={"#dfe8ff"}
      />
      <AstroWidget stateTitle="Moon Fall" state={moonSet} icon={fallmoon} />

      <AstroWidget
        stateTitle="Wind Degree"
        state={windDegree + " " + windDir}
        icon={windDirIcon}
      />
      <AstroWidget
        stateTitle="Wind Speed"
        state={windSpeed + " kph"}
        icon={speedIcon}
      />
    </div>
  );
};

export default AstroCard;
