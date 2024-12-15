import "./s/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "1_shared/libs/classNames/classNames";
import { useTheme } from "7_app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
export default App;
