import { render, screen } from "./test-utils";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("finds lightModeIcon in document", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  const lightModeIcon = screen.getByAltText("light");
  expect(lightModeIcon).toBeInTheDocument();
});

test("toggles darkMode Icon on click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  const lightModeIcon = screen.getByAltText("light");
  // change to dark mode
  userEvent.click(lightModeIcon);
  const darkModeIcon = screen.getByAltText("dark");
  expect(darkModeIcon).toBeInTheDocument();
  // back to light mode
  userEvent.click(darkModeIcon);
  expect(lightModeIcon).toBeInTheDocument();
});
