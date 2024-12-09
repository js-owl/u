import "./s/index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { MainPageAsync } from "5_p/MainPage/MainPage.async";
import { AboutPageAsync } from "5_p/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "7_app/providers/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
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
