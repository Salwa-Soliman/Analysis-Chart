import themeReducer, { toggleDarkMode } from "./darkModeSlice";

test("should toggle dark mode", () => {
  const state = { isDarkMode: false };
  expect(themeReducer(state, toggleDarkMode())).toEqual({ isDarkMode: true });
});
