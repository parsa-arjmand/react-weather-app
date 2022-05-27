import { MdSearch } from "react-icons/md";

//passing data to the app component from our input value
function SideBar({ searchValue, error }) {
  const onSubmit = (e) => {
    e.preventDefault();
    searchValue(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <header className="flex items-center justify-between bg-[#fafafa] p-3 rounded-lg">
      <div>
        <span className="font-bold text-[#5d83ff] font-Poppins">
          Paco Weather
        </span>
      </div>
      <div className="w-52 relative  sm:w-[11rem]">
        <form onSubmit={onSubmit}>
          <input
            placeholder="City Name"
            type="search"
            className="text-sm text-gray-600 w-full py-2 px-7 rounded-lg relative focus:outline-none placeholder:text-xs shadow-sm"
          />
          {error && (
            <span className=" text-xs text-red-500 absolute top-14 left-0 bg-[#fafafa] py-3 px-2 rounded-lg">
              {error}
            </span>
          )}
        </form>

        <MdSearch className="absolute left-2 top-[30%] text-slate-500" />
      </div>
    </header>
  );
}

export default SideBar;
