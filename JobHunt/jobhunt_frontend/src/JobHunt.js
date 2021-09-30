import React, { useEffect, useState } from 'react'
import { storeServiceIdAndDefineLanguage } from './api/initilizeApp'
import { ProvideAuth } from './api/authentication';
import Jh_Router from './routes/Jh_Router';
export const JobHunt = () => {

    const [language, setLanguage] = useState('en')
    useEffect(async () => {
        await storeServiceIdAndDefineLanguage(language)
    }, [language])

    return (
         <ProvideAuth>
            <Jh_Router />
         </ProvideAuth>
    )
}
