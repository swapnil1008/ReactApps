import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onClickBody = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onClickBody, { capture: true });

    return () => {
      document.body.removeEventListener("click", onClickBody);
    };
  }, []);
  const optionsDropdown = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {optionsDropdown}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
