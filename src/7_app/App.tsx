import "./s/index.scss";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Navbar } from "4_widgets/Navbar";
import { useTheme } from "7_app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Sidebar } from "4_widgets/Sidebar";

const Component = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      <button onClick={toggle}>{t("translate")}</button>
    </div>
  );
};

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Component />
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
