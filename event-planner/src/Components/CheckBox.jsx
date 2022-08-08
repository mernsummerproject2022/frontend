import React from "react";

const CheckBox = ({
  label = "label",
  filter = "football",
  toggleFilter,
  check,
}) => {
  const onchange = (e) => {
    const action = e.target.checked ? "add" : "remove";
    toggleFilter({ filter: filter, action: action });
  };

  return (
    <div className="checkboxes">
      <span>
        {label}
        <input
          type="checkbox"
          className="checkmark"
          checked={check}
          onChange={onchange}
        ></input>
      </span>
    </div>
  );
};

export default CheckBox;
