// Vendor libs
import React from 'react';
import { withTranslation } from '../lib/i18n';

// Component definition
const HomePage = ({ t }) => {
  return (
    <>
      <h1>{t('common:hello-world')}</h1>
    </>
  );
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

// Exportation
export default withTranslation('common')(HomePage);
