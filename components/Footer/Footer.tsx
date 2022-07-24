import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://promitia.com" target="_blank" rel="noopener noreferrer">
      Powered by{' '}
      <span className={styles.logo}>
        <Image src="/images/logo_promitia.png" alt="Promitia Logo" width={20} height={20} />
      </span>
    </a>
  </footer>
);

export default Footer;
