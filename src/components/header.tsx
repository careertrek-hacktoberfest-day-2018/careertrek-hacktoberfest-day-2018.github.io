import * as React from 'react';
import headerBanner from '../images/Hacktoberfest_2018_banner1_1293x157.png';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `url(${headerBanner})`,
      marginBottom: '1.45rem',
      minHeight: '157px',
    }}
    title={siteTitle}
  >
  </header>
);

export default Header;
