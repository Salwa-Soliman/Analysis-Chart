import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartSlice";
import darkModeReducer from "./darkModeSlice";
export default configureStore({
  reducer: {
    analysisChart: chartReducer,
    theme: darkModeReducer,
  },
});
