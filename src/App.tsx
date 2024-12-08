import "./index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { MainPageAsync } from "./p/MainPage/MainPage.async";
import { AboutPageAsync } from "./p/AboutPage/AboutPage.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
