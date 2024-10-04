'use client'
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function Providers({ children }) {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    );
}
