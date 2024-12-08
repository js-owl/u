import "./s/index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { MainPageAsync } from "./p/MainPage/MainPage.async";
import { AboutPageAsync } from "./p/AboutPage/AboutPage.async";
import { Suspense, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const toogleTheme = () => {
    setTheme(theme == Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>Toggle</button>
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
