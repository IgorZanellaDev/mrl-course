import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const I18nTest: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  const user = {
    name: "Igor",
    surname: "Zanella",
  };

  return (
    <div>
      <h1>{t("dogs", { count: 21, ordinal: true })}</h1>
      <h2>{t("included", { count: 10, context: "random" })}</h2>
      <p>{t("thereAreSomeCats", { count: 2 })}</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "it" : "en")}>
        Change to {i18n.language === "en" ? "Italian" : "English"}
      </button>
    </div>
  );
};

export default I18nTest;
