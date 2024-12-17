import "./s/index.scss";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Navbar } from "4_widgets/Navbar";
import { useTheme } from "7_app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
export default App;
