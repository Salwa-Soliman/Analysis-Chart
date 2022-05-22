import { createSlice } from "@reduxjs/toolkit";
import { filterData, getUniqueValues } from "../util/ProcessData";

export const chartSlice = createSlice({
  name: "analysisChart",
  initialState: {
    fetchedData: [],
    chartData: [],
    countries: [],
    camps: [],
    schools: ["Show All"],
    selectedCountry: "",
    selectedCamp: "",
    selectedSchool: "Show All",
    elementDetails: [],
  },
  reducers: {
    setData: (state, action) => {
      state.fetchedData = action.payload.data;
      getUniqueValues(state);
      filterData(state);
    },

    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
      filterData(state);
    },

    setSelectedCamp: (state, action) => {
      state.selectedCamp = action.payload;
      filterData(state);
    },

    setSelectedSchool: (state, action) => {
      state.selectedSchool = action.payload;
      filterData(state);
    },

    getElementDetails: (state, action) => {
      const id = action.payload;
      state.elementDetails = state.fetchedData.filter(
        (element) => element.id === id
      )[0];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
  setSelectedCountry,
  setSelectedCamp,
  setSelectedSchool,
  getElementDetails,
} = chartSlice.actions;

export default chartSlice.reducer;
