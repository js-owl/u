import "./index.scss";
import { Link, Routes, Route } from "react-router-dom";
import MainPage from "./p/MainPage/MainPage";
import AboutPage from "./p/AboutPage/AboutPage";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
};
export default App;
