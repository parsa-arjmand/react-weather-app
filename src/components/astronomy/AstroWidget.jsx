function AstroWidget({ state, icon, stateTitle }) {
  return (
    <div className=" flex items-center justify-center rounded-lg p-2 pl-1 mt-4 shadow-md bg-white">
      <img src={icon} alt="moonIcon" className="w-[55px] h-[55px] " />
      <div className="flex flex-col">
        <span className="text-xs mb-1">{stateTitle}</span>
        <span className="text-xs text-gray-600">{state}</span>
      </div>
    </div>
  );
}

export default AstroWidget;
