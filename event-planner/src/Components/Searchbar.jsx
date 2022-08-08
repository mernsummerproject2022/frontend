import React from "react";
import CheckBox from "./CheckBox";

const Searchbar = ({ toggleFilter, filterList, filterBy }) => {
  return (
    <div className="search">
      <label>Event Type:</label>
      <div className="chk">
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
    </div>
  );
};

export default Searchbar;
