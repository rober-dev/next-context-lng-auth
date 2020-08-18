// Vendor libs
import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n';

// Custom Libs
import Header from '../components/header';

// Component definition
const BaseApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

BaseApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

// Exportation
export default appWithTranslation(BaseApp);
