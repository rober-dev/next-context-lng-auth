// Vendor libs
import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n';

// Contexts
import { LngProvider } from '../context/lng';
import { AuthProvider } from '../context/auth';

// Custom Libs
import Header from '../components/header';

// Component definition
const BaseApp = ({ Component, pageProps }) => {
  return (
    <>
      <LngProvider>
        <AuthProvider>
          <Header />
          <Component {...pageProps} />
        </AuthProvider>
      </LngProvider>
    </>
  );
};

BaseApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

// Exportation
export default appWithTranslation(BaseApp);
