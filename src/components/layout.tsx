import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import bizreachTrekIcon from '../images/bizreach-icon.png';
import careerTrekIcon from '../images/careertrek-icon.png';

interface LayoutProps {
  children: any;
}

interface MetaData {
  name: String;
  content: String;
}

const metaDataList: Array<MetaData> = [
  { name: 'description', content: 'Careertrek Hacktoberfest Day 2018' },
  { name: 'keywords', content: 'hacktoberfest, careertrek' },
];

const Footer = () => (
  <footer
    style={{
      width: '100vw',
      backgroundColor: '#f9f9f9',
      paddingTop: '32px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 940,
        fontFamily:
          '"Sailec-Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      }}
    >
      <h2 style={{ fontWeight: 200 }}>Our Company Product</h2>
      <div style={LinkWrapperStyle}>
        <img src={bizreachTrekIcon} style={iconStyle} />
        <a href="https://www.bizreach.jp/" target="_blank" style={linkStyle}>
          BizReach
        </a>
      </div>
      <div style={LinkWrapperStyle}>
        <img src={careerTrekIcon} style={iconStyle} />
        <a href="https://www.careertrek.com/" target="_blank" style={linkStyle}>
          CareerTrek
        </a>
      </div>
    </div>
  </footer>
);

const LinkWrapperStyle = {
  display: 'flex',
};

const iconStyle = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  marginRight: '8px',
};

const linkStyle = {
  color: '#888',
};

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} meta={metaDataList}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            fontFamily:
              '"Sailec-Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
);

export default Layout;
