import { useEffect, useState } from "react";
import { storeServiceIdAndDefineLanguage } from "../../api/initilizeApp";
import { getCountryInfoToSignup } from "../../api/public";
import { getLanguage } from "../../utils";

function useProvideLangauge() {

    const [language, setLanguage] = useState({ suf: 'en' });
    const [languageTransalate, setLanguageTransalate] = useState({})
    const [loading, setLoading] = useState({ status: false })
    const [availableLanguages, setAvailableLanguages] = useState([
        { title: 'france', suf: 'fr' },
        { title: 'spain', suf: 'es' },
        { title: 'germany', suf: 'de' },
        { title: 'United Kingdom', suf: 'en' },])


    const initilizeApp = async () => {
        await storeServiceIdAndDefineLanguage(language.suf)

        try {
            var defaultLanguageTitle
            for (let item in availableLanguages) {
                if (language.suf == availableLanguages[item].suf) defaultLanguageTitle = availableLanguages[item].title
            }
            const data = await getCountryInfoToSignup(defaultLanguageTitle)
            const flagUrl =  Object.values(data[0]['flag'])[0]
            setLanguage({ ...language, url: flagUrl })
        } catch (error) {
            //error
        }
    }


    useEffect(() => {
        try {

            initilizeApp().then(() =>
                Promise.all(
                    availableLanguages.map(async (country) => {
                        const flagurl = await getCountryInfoToSignup(country.title)
                        const path = Object.values(flagurl[0]['flag'])[0]
                        return { ...country, url: path }

                    })
                ).then((data) => {
                    setAvailableLanguages(data)
                }))
        } catch (error) {
            ///error
        }

    }, [])

    const handleChangeLanguage = (targetLanguage) => {
        setLoading({ status: true, targetLanguage })
        storeServiceIdAndDefineLanguage(targetLanguage.suf)
            .then(() => { setLanguage(targetLanguage) })
            .finally(() => setLoading({ status: false, targetLanguage }))

    }
    return {
        language,
        handleChangeLanguage,
        languageTransalate,
        availableLanguages,
        loading

    };
}
export { useProvideLangauge }