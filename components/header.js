// Vendor libs
import React, { useContext } from 'react';

// Custom libs
import { Link, withTranslation } from '../lib/i18n';

// Contexts
import { LngContext } from '../context/lng';

// Component definition
const Header = ({ t }) => {
  // Get context members
  const { lng, languages, changeLanguage } = useContext(LngContext);

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
      <ul>
        <li>
          <p>{`Current language: ${lng}`}</p>
          {languages &&
            languages.map((l) => {
              return (
                <div key={l.code}>
                  <span onClick={() => changeLanguage(l.code)}>
                    {l.code.toUpperCase()}
                  </span>
                  <span>&nbsp;</span>
                </div>
              );
            })}
        </li>
      </ul>
    </>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header'],
});

// Exportation
export default withTranslation('header')(Header);
