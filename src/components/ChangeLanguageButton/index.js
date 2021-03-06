import { useState } from "react";
import ButtonChangeLanguage from "../ButtonChangeLanguage";

import { i18n } from "../../translate/i18n";

const I18N_STORAGE_KEY = "i18nextLng";

const ChangeLanguageButton = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleSelectChange = (language) => {
    localStorage.setItem(I18N_STORAGE_KEY, language);
    window.location.reload();
  };

  const change_language = () => {
    if (language.includes("pt")) {
      handleSelectChange("en");
    } else if (language.includes("en")) {
      handleSelectChange("pt");
    }
  };

  return (
    <>
      <ButtonChangeLanguage isLight change_language={change_language}>
        {i18n.t("translation")}
      </ButtonChangeLanguage>
    </>
  );
};

export default ChangeLanguageButton;
