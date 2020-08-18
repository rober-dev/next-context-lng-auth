// Vendor libs
import React from 'react';

// Custom libs
import { i18n, Link, withTranslation } from '../lib/i18n';

// Component definition
const Header = ({ t }) => {
  const changeLanguageHandler = (e) => {
    e.preventDefault();
    const lng = i18n.language;
    i18n.changeLanguage(lng === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <ul>
        <li>
          <Link href='/'>
            <a>{t('header:home')}</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>{t('header:about')}</a>
          </Link>
        </li>
      </ul>
      <button type='button' onClick={changeLanguageHandler}>
        Cambiar idioma
      </button>
    </>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header'],
});

// Exportation
export default withTranslation('header')(Header);
