import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCamp,
  setSelectedCountry,
  setSelectedSchool,
} from "../store/chartSlice";
import DropDownList from "./DropDownList";

export default function DropDowns() {
  const dispatch = useDispatch();
  const {
    countries,
    camps,
    schools,
    selectedCountry,
    selectedCamp,
    selectedSchool,
  } = useSelector((state) => state.analysisChart);

  return (
    <div
      className={
        "d-flex flex-column flex-md-row align-items-md-center justify-content-around my-5"
      }
    >
      <DropDownList
        title={"Select Country"}
        data={countries}
        value={selectedCountry}
        onChange={(val) => dispatch(setSelectedCountry(val))}
      />
      <DropDownList
        title={"Select Camp"}
        data={camps}
        value={selectedCamp}
        onChange={(val) => dispatch(setSelectedCamp(val))}
      />
      <DropDownList
        title={"Select School"}
        data={schools}
        value={selectedSchool}
        onChange={(val) => dispatch(setSelectedSchool(val))}
      />
    </div>
  );
}
