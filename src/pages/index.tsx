import * as React from 'react';
import showcaseImage1 from '../images/5.jpg';
import showcaseImage2 from '../images/6.jpg';

import Layout from '../components/layout';
import EncourageButton from '../components/encourageButton';
import HacktoberFestIcon from '../images/Hacktoberfest_2018_banner3_522x522.png'

const listStyle = {
  display: 'inline-block',
  margin: '1rem'
};

const imgStyle = {
  width: '300px',
  height: 'auto',
  objectFit: 'contain'
};

const IndexPage = () => (
  <Layout>
    <h1>CareerTrek Hacktoberfest Day 2018</h1>
    <h3>Address</h3>
    <address>
      1-20-8, Fujigaoka, Aoba-ku, Yokohama-shi, Kanagawa-ken 227-0043, Japan
    </address>
    <section>
      <h2>happy hacking day!</h2>
      <ul style={{
        listStyleType: 'none',
      }}>
        <li style={listStyle}>
          <img style={imgStyle} src={showcaseImage1} alt=""/>
        </li>
        <li style={listStyle}>
          <img style={imgStyle} src={showcaseImage2} alt=""/>
        </li>
      </ul>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.2636560418887!2d139.5301808144946!3d35.547190144920435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f78612c70c99%3A0xbf8aabc4234d7842!2z6aOv55Sw5bGL!5e0!3m2!1sja!2sjp!4v1540528222240"
      width="600"
      height="450"
      frameBorder="0"
      allowFullScreen
    />
    <h3>Time Schedule</h3>
    <p>
      <time dateTime="2018-10-26T10:00+9:00">10:00</time>~
      <time dateTime="2018-10-26T10:00+18:00">18:00</time>
    </p>
    <h2>Let us start hacking!</h2>
    <div style={LinkWrapperStyle}>
      <img src={HacktoberFestIcon} style={iconStyle} />
      <a href="https://hacktoberfest.digitalocean.com/" target="_blank" style={linkStyle}>
        Hacktoberfest
      </a>
    </div>
    {/* <EncouragedButton></EncouragedButton> */}
  </Layout>
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
  textDecoration: 'none',
};


export default IndexPage;
