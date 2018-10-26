import * as React from 'react';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>CareerTrek Hacktoberfest Day 2018</h1>
    <address>
      1 Chome-20-8 Fujigaoka, Aoba-ku, Yokohama-shi, Kanagawa-ken 227-0043,
      Japan
    </address>
    <p>
      <time dateTime="2018-10-26T10:00+9:00">10:00</time>~
      <time dateTime="2018-10-26T10:00+18:00">18:00</time>
    </p>
    <p>Let us start hacking!</p>
    <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a>
    {/* <EncouragedButton></EncouragedButton> */}
  </Layout>
);

export default IndexPage;
