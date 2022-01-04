import React, { useEffect } from 'react'
import { ProvideAuth } from './api/authentication';
import AppRouter from './routes/AppRouter';
import { ProvideLanguage } from './LanguageProvider/Dev/ProvideLanguage';
import { shareStorage } from './api/initilizeApp';

export const JobHunt = () => {
    useEffect(() => shareStorage())

    return (
        <ProvideLanguage>
            <ProvideAuth>
                <AppRouter />
            </ProvideAuth>
        </ProvideLanguage>
    )
}
