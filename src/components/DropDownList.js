import React from "react";
import "./DropDownList.module.css";

export default function DropDownList({ title, data, value, onChange }) {
  return (
    <div className="d-flex align-items-center  my-2">
      <label htmlFor={title.split(" ").join("-")}>{title}</label>
      <select
        id={title.split(" ").join("-")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {/* <option value="" selected disabled>
          ---
        </option> */}
        {data.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
