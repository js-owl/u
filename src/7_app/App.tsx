import { Suspense } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Navbar } from "4_widgets/Navbar";
import { useTheme } from "7_app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Sidebar } from "4_widgets/Sidebar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
