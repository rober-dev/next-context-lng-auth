// Vendor libs
import React from 'react';
import Link from 'next/link';

// Component definition
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

// Exportation
export default Header;
