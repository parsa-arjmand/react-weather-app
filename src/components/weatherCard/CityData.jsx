import React from "react";

function CityData({ update, temp, state, icon }) {
  return (
    <div className="flex justify-between items-center">
      {/* top left text */}
      <div className="flex flex-col text-white ">
        <span className="font-bold text-lg ">Now</span>
        <span className="text-xs  ">last update: </span>
        <span className="text-xs">{update} </span>
      </div>
      <div className="flex flex-col text-right text-white ">
        {temp ? (
          <div className="flex justify-end">
            <img src={icon} alt="weathericon" className=" w-[30px] h-[30px] " />
            <span className="font-bold text-2xl ml-2 text-white">
              {Math.round(temp)} &#8451;
            </span>
          </div>
        ) : (
          <div>loading...</div>
        )}
        <span className="text-xs w-36 hover:text-clip max-w-[8rem]">
          {state}
        </span>
      </div>
    </div>
  );
}

export default CityData;
