import React, { useEffect } from 'react'
import { ProvideAuth } from './api/authentication';
import AppRouter from './routes/AppRouter';
import { ProvideLanguage } from './LanguageProvider/Dev/ProvideLanguage';
import { shareStorage } from './api/initilizeApp';
import { Provider } from 'react-redux';
import ConfigureStore from './Store/store';

export const JobHunt = () => {

    useEffect(() => shareStorage());

    const store = ConfigureStore();

    return (
        <Provider store={store}>
            <ProvideLanguage>
                <ProvideAuth>
                    <AppRouter />
                </ProvideAuth>
            </ProvideLanguage>
        </Provider>
    )
}
