import React from 'react';

const CheckBox = ({label="label", filter="football", toggleFilter, check}) => {
    const onchange = (e) => {
        const action = e.target.checked ? "add":"remove";
        toggleFilter({filter:filter, action:action});
    }

    return (
        <span>
            {label}
            <input type="checkbox" checked={check} onChange={onchange}></input>
        </span>
    )
};

export default CheckBox;