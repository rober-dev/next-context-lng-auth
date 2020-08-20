// Vendor libs
import React, { useState, useEffect } from 'react';
import { i18n } from '../../lib/i18n';

// Context
import { LngContext } from './lng.context';

// Lng Context Provider definition
const LngProvider = ({ children }) => {
  // Members
  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  // Component state members
  const [lng, setLng] = useState(languages[0].code);

  useEffect(() => {
    const localStorageLang = localStorage.getItem('gvt-lng');
    if (localStorageLang) {
      setLng(localStorageLang);
      i18n.changeLanguage(localStorageLang);
    } else {
      let browserLng = (navigator.language || navigator.userLanguage).substr(
        0,
        2
      );
      if (browserLng) {
        var exists = languages.find((lng) => lng.code === browserLng);
        if (exists) {
          setLng(browserLng);
          localStorage.setItem('gvt-lng', browserLng);
          i18n.changeLanguage(browserLng);
        } else {
          setLng(languages[0].code);
          localStorage.setItem('gvt-lng', languages[0].code);
          i18n.changeLanguage(languages[0].code);
        }
      } else {
        setLng(languages[0].code);
        localStorage.setItem('gvt-lng', languages[0].code);
        i18n.changeLanguage(languages[0].code);
      }
    }
  }, []);

  const changeLanguage = (lngCode) => {
    var exists = languages.find((lng) => lng.code === lngCode);
    if (exists) {
      setLng(lngCode);
      localStorage.setItem('gvt-lng', lngCode);
      i18n.changeLanguage(lngCode);
    }
  };

  return (
    <LngContext.Provider value={{ lng, languages, changeLanguage }}>
      {children}
    </LngContext.Provider>
  );
};

// Exportation
export { LngProvider };
