import React from "react";

function QualityBar({ airQuality, percent }) {
  return (
    <div className="w-full flex items-center h-16 px-4  relative shadow-md rounded-lg  bg-white ">
      <div className="relative h-1 rounded-full w-full bg-blue-50 mt-2">
        <div
          style={{ width: `${percent}%` }}
          className="absolute top-0 left-0 h-1  rounded-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0]"
        ></div>
      </div>
      <span className="absolute text-[10px]  top-2 left-2 ">excellent</span>
      <span className="absolute text-xs text-[10px] top-2 right-1/2 translate-x-1/2">
        Modetate
      </span>
      <span className="absolute text-xs text-[10px]  top-2 right-2">
        Hazardous
      </span>
    </div>
  );
}

export default QualityBar;
