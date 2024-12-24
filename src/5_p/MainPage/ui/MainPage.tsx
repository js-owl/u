import { useTranslation } from "react-i18next";
import { BugButton } from "7_app/providers/ErrorBoundary";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t("main page")}
    </div>
  );
};
export default MainPage;
