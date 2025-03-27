import { useTranslation } from "react-i18next";
import { Page } from "4_widgets/Page/Page";
import { Counter } from "2_entities/Counter";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <Page>
      {t("about page")} <Counter />
    </Page>
  );
};
export default AboutPage;
