import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Filters");
  const filters = ["All Filters", "Filter 1", "Filter 2", "Filter 3"];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="border-2 rounded-lg w-6/12 bg-white">
      <div className="flex outline-none">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className=" text-black py-2 px-3 font-semibold outline-none"
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="search"
          id="search"
          className="px-4 w-full outline-none"
          placeholder="Search by Address/Txn Hash/Block/Token/Domain Name"
          value={searchTerm}
          onChange={handleChange}
        />{" "}
        <button type="button" className="flex mr-2 bg-white">
          {" "}
          <img
            className="h-7 w-9 mt-1 bg-white pointer-events-none"
            src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1715231215/bscscan/Button_xzkml8.png"
            alt=""
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
