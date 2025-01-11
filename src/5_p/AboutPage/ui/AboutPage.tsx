import { useTranslation } from "react-i18next";
import { Counter } from "2_entities/Counter";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("about page")} <Counter />
    </div>
  );
};
export default AboutPage;
