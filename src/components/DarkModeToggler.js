import React from "react";
import dark from "../images/dark.gif";
import light from "../images/light.gif";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
export default function DarkModeToggler() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  // console.log(isDarkMode);

  return (
    <>
      <img
        width={50}
        height={50}
        className="position-fixed bottom-0 end-0 m-4 p-2 bg-white rounded-circle shadow-lg"
        style={{ cursor: "pointer" }}
        src={isDarkMode ? light : dark}
        onClick={() => dispatch(toggleDarkMode())}
        alt={isDarkMode ? "dark" : "light"}
      />
    </>
  );
}
