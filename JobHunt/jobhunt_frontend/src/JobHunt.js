import React, { useEffect, useState } from 'react'
import { storeServiceIdAndDefineLanguage } from './api/initilizeApp'
import { ProvideAuth } from './api/authentication';
import Jh_Router from './routes/Jh_Router';
export const JobHunt = () => {

    const [language, setLanguage] = useState('en')
    useEffect(async () => {
        await storeServiceIdAndDefineLanguage(language)
    }, [language])
    useEffect(()=>{
            window.addEventListener('storage', function(event) {
                if (event.key == 'getSessionStorage') {
                    // Some tab asked for the sessionStorage -> send it
                    localStorage.setItem('sessionStorage', JSON.stringify(window.sessionStorage));
                    localStorage.removeItem('sessionStorage');
                } else if (event.key == 'sessionStorage' && !window.sessionStorage.length) {
                    // sessionStorage is empty -> fill it
                    var data = JSON.parse(event.newValue)
                                // value;
                    console.log("Storage",data)
                    for (const key in data) {
                        window.sessionStorage.setItem(key, data[key]);
                    }

                }
            });
    })
    if (window.sessionStorage.length<3) {
        // Ask other tabs for session storage
        localStorage.setItem('getSessionStorage', Date.now());
        console.log("Data")
    };

    return (
         <ProvideAuth>
            <Jh_Router />
         </ProvideAuth>
    )
}
