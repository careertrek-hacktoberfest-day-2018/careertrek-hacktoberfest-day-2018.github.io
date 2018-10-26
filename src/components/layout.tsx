import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: any
}

interface MetaData {
  name: String,
  content: String,
}

const metaDataList : Array<MetaData> = [
  { name: 'description', content: 'Careertrek Hacktoberfest Day 2018' },
  { name: 'keywords', content: 'hacktoberfest, careertrek' },
];

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={metaDataList}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            fontFamily: '"Sailec-Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
          }}
        >
          {children}
        </div>
        <Footer copyright="CareerTrek Hacktoberfest Day 2018" />
      </>
    )}
  />
);

export default Layout;
