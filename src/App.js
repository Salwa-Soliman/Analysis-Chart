import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import DarkModeToggler from "./components/DarkModeToggler";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const className = isDarkMode ? "dark" : "";
  return (
    <div className={`py-4 ${className}`}>     
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <DarkModeToggler />
    </div>
  );
}

export default App;
