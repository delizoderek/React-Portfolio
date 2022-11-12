import React from "react";

function Checkbox({ label, option, onClick, selected = false, ...rest }) {
  return (
    <div className="checkbox-container">
			<label htmlFor={option}>{label}</label>
      <input
        className="checkbox"
        id={option}
        name={option}
        type={"checkbox"}
        onChange={onClick}
        checked={selected}
        {...rest}
      />
    </div>
  );
}

export default Checkbox;
