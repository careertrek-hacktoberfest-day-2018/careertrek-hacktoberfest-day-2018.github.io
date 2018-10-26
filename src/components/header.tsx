import * as React from 'react';
import headerBanner from '../images/Hacktoberfest_2018_banner2_2482x304.png';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `url(${headerBanner})`,
      marginBottom: '1.45rem',
      minHeight: '157px',
      backgroundSize: 'auto 157px',
    }}
    title={siteTitle}
  />
);

export default Header;
