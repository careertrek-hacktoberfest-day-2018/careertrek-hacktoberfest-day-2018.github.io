import * as React from 'react';

import Layout from '../components/layout';
import EncourageButton from "../components/encourageButton";

const IndexPage = () => (
  <Layout>
    <h1>CareerTrek Hacktoberfest Day 2018</h1>
    <address>
      1-20-8, Fujigaoka, Aoba-ku, Yokohama-shi, Kanagawa-ken 227-0043,
      Japan
    </address>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.2636560418887!2d139.5301808144946!3d35.547190144920435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f78612c70c99%3A0xbf8aabc4234d7842!2z6aOv55Sw5bGL!5e0!3m2!1sja!2sjp!4v1540528222240"
      width="600" height="450" frameBorder="0" allowFullScreen />
    <p>
      <time dateTime="2018-10-26T10:00+9:00">10:00</time>~
      <time dateTime="2018-10-26T10:00+18:00">18:00</time>
    </p>
    <p>Let us start hacking!</p>
    <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a>
    <h2>Our Company Product</h2>
    <a href="https://www.bizreach.jp/">BizReach</a>
    <a href="https://www.careertrek.com/">CareerTrek</a>
    {/* <EncouragedButton></EncouragedButton> */}
  </Layout>
);

export default IndexPage;
