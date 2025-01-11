import { useTranslation } from "react-i18next";
import { Counter } from "2_entities/Counter";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("main page")}
      <Counter />
    </div>
  );
};
export default MainPage;
