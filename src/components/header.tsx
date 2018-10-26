import * as React from 'react';
import headerBanner from '../images/Hacktoberfest_2018_banner2_2482x304.png';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `url(${headerBanner}) center center / cover no-repeat`,
      width: '100%',
      height: '0',
      paddingTop: 'calc(304 / 2482 * 100%)',
      marginBottom: '1.45rem',
    }}
    title={siteTitle}
  />
);

export default Header;
