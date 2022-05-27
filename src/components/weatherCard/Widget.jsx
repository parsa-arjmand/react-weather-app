import React from "react";

function Widget(props) {
  return (
    <div className="md:w-20 md:h-16 w-24 h-20 shadow-sm  rounded-lg	 bg-[#fafafa] text-center flex flex-col justify-center ">
      <span className="md:text-xs text-sm text-black ">
        {props.conditionNm}
      </span>
      <span className="md:text-sm text-base font-bold text-[#557cff]">
        {props.condition}
      </span>
    </div>
  );
}

export default Widget;
