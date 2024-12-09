import "./s/index.scss";
import { Link, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { MainPage } from "5_p/MainPage";
import { AboutPage } from "5_p/AboutPage";
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
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
