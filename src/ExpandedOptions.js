import { useState } from "react";
import "./ExpandedOptions.scss";

function ExpandedOptions(props) {
  const { options, state } = props;

  const optionsArr = options.map((option) => {
    // console.log()
    return (
      <button onClick={option.onclickEvent} className="list">
        <span className="icon">
          <i
            className={`${option.icon ? `${option.icon}` : "fa fa-circle"}`}
          ></i>
        </span>
        <span className="name">{option.name}</span>
      </button>
    );
  });

  return (
    <div className={`ExpandedOptions ${state ? "active" : ""}`}>
      {optionsArr}
    </div>
  );
}

export default ExpandedOptions;
