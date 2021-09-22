import React, { useEffect, useState } from 'react'
import {HomePage } from './Pages/index';
import {Jh_MainLayout} from './components/Jh_layout/index'
import {storeServiceIdAndDefineLanguage} from './api/initilizeApp'
export const JobHunt = () => {
     const [language, setLanguage] = useState('en')
     useEffect(async() =>  {
        await storeServiceIdAndDefineLanguage(language)
     }, [language])
    return (
        <>
            <Jh_MainLayout children={<HomePage/>}/>
        </>
    )
}
