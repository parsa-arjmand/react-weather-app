import React from "react";

function DailyWeather({ temp, icon, date, state }) {
  return (
    <div className=" flex justify-between items-center bg-white shadow-md p-4 rounded-lg my-4  w-full lg:w-[19rem] lg:mx-auto">
      <div className="flex items-center">
        <img src={icon} alt="" className="w-[37px] h-[37px]" />
        <div className="flex flex-col ml-2">
          <span className="text-base  font-bold text-[#5D83FF]">
            {temp} &#8451;
          </span>
          <span className="text-xs text-gray-700 ">{state}</span>
        </div>
      </div>

      <span className="text-xs text-gray-700">{date}</span>
    </div>
  );
}

export default DailyWeather;
