import { useContext } from "react";
import { LanguageContext } from "./ProvideLanguage";
  const useLanguage = () => {
    return useContext(LanguageContext);
  };
  export {useLanguage}