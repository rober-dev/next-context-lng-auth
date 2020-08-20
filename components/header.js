// Vendor libs
import React, { useContext, useState } from 'react';

// Custom libs
import { Link, withTranslation } from '../lib/i18n';

// Contexts
import { LngContext } from '../context/lng';
import { AuthContext } from '../context/auth';

// Component definition
const Header = ({ t }) => {
  // Get context members
  const { lng, languages, changeLanguage } = useContext(LngContext);
  const { currentUser, logIn, logOut } = useContext(AuthContext);

  // Component state members
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState();
  const [message, setMessage] = useState('');

  // Event handlers
  const logOutHandler = (e) => {
    e.preventDefault();
    logOut();
  };

  const logInHandler = (e) => {
    try {
      e.preventDefault();
      logIn(username, password);
      setSuccess(true);
      setMessage(t('auth:loginSuccess'));
    } catch (err) {
      setSuccess(false);
      setMessage(t('auth:loginError'));
    }
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
      {currentUser && (
        <div>
          <span>
            {t('auth:currentUser')}: {currentUser.username}
          </span>
          <button type='button' onClick={(e) => logOutHandler(e)}>
            {t('auth:logOut')}
          </button>
        </div>
      )}
      {!currentUser && (
        <div>
          <span>{t('auth:logIn')}</span>

          <form onSubmit={logInHandler}>
            <span>{t('auth:username')}</span>
            <input
              type='text'
              name='username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>{t('auth:password')}</span>
            <input
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>{t('auth:logIn')}</button>
          </form>
        </div>
      )}
      {message && (
        <div style={{ color: success ? 'green' : 'red' }}>{message}</div>
      )}
    </>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'auth'],
});

// Exportation
export default withTranslation('header', 'auth')(Header);
