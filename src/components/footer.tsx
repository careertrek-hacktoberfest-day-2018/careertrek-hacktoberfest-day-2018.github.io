import * as React from 'react';

interface FooterProps {
    copyright: string;
}

const Footer = ({copyright}: FooterProps) => (
    <footer
    style={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#582D41',
        color: '#2FFEFE',
        textAlign: 'center',
      }}>
        <p><small>{copyright}</small></p>
    </footer>
);

export default Footer;