import React from "react";

import QualityBar from "./QualityBar";
function AirQualityCard({ airQuality }) {
  let precentQuality = 0;
  function qualityCheck() {
    precentQuality = (airQuality * 100) / 34;
    if (precentQuality > 100) precentQuality = 100;
    if (airQuality <= 5) return "Good";
    else if (airQuality <= 34) return "Moderate";
    else return "Hazardous";
  }

  return (
    <div className=" bg-[#fafafa] bg-center sm:my-6 md:w-[19rem] w-[22rem] h-52 bg-cover p-4 flex flex-col justify-between rounded-xl shadow-sm relative">
      <div className="flex justify-between items-center">
        {/* top left text */}
        <span className="font-bold text-lg ">Air Quality</span>
        <span className=" text-xs text-gray-500 w-40 absolute top-[3.7rem] ">
          Air quality is calculated based on the PM2.5 level
        </span>
        {/* top right desc */}
        <div className="flex flex-col text-right text-slate-800 ">
          <div>
            <span className="font-bold text-2xl text-[#557cff] ">
              {Math.round(airQuality) + " "}
            </span>
            <span className="text-xs">(PM2.5) </span>
          </div>
          <span className="text-sm"> {qualityCheck()} </span>
        </div>
      </div>
      <QualityBar
        airQuality={airQuality}
        percent={Math.round(precentQuality)}
      />
    </div>
  );
}

export default AirQualityCard;
