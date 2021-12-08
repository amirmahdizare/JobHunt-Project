import React, {  createContext } from "react";
import { useProvideLangauge } from "./useProvideLangauge";
const LanguageContext = createContext();

 function ProvideLanguage({ children,state }) {
  const languageDetail = useProvideLangauge(state)
  return <LanguageContext.Provider value={languageDetail}>{children}</LanguageContext.Provider>;
} 
export { ProvideLanguage,LanguageContext}