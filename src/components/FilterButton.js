import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="filter-button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)
      
    }
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> Animals</span>
    </button>
  );
}

export default FilterButton;
