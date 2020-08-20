// Vendor libs
import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n';

// Contexts
import { LngProvider } from '../context/lng';

// Custom Libs
import Header from '../components/header';

// Component definition
const BaseApp = ({ Component, pageProps }) => {
  return (
    <>
      <LngProvider>
        <Header />
        <Component {...pageProps} />
      </LngProvider>
    </>
  );
};

BaseApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

// Exportation
export default appWithTranslation(BaseApp);
