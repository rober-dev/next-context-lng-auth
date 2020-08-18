// Vendor libs
import React from 'react';

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

// Exportation
export default BaseApp;
