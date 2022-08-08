import React from "react";
import CheckBox from "../Components/CheckBox";

const Searchbar = ({ toggleFilter, filterList, filterBy }) => {
  return (
    <div className="search">
      <label>Event Type:</label>
      {filterList.map((filter, index) => {
        return (
          <CheckBox
            key={index + new Date().getTime()}
            label={filter}
            filter={filter}
            check={filterBy.includes(filter)}
            toggleFilter={toggleFilter}
          />
        );
      })}
    </div>
  );
};

export default Searchbar;
