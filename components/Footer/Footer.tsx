import React from 'react';
import logoPromitia from './logo_promitia.png';
import { Grid, Row, Column, UnorderedList, ListItem, Link } from 'carbon-components-react';
import Image from 'next/image';
// import { LogoGithub24, LogoTwitter24, LogoInstagram24 } from '@carbon/icons-react';

const styleListItem = {
  marginBottom: '8px',
};

const styleLinkListItem = {
  color: 'white',
  marginRight: '10px',
};

const Footer = () => (
  <footer id="footer">
    <Grid>
      <Row>
        <Column
          style={{
            textAlign: 'left',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
          sm={12}
          md={{ span: 1, offset: 2 }}
          lg={{ span: 2, offset: 4 }}
        >
          <UnorderedList>
            <ListItem style={styleListItem}>
              <Link href="mailto:rwquispec@gmail.com" style={styleLinkListItem}>
                Contact me
              </Link>
            </ListItem>
            <ListItem style={styleListItem}>
              <Link href="/" style={styleLinkListItem}>
                airdaneel.com
              </Link>
            </ListItem>
          </UnorderedList>
        </Column>
        <Column
          style={{
            textAlign: 'center',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
          sm={12}
          md={2}
          lg={4}
          className="column__interline"
        >
          <UnorderedList>
            <ListItem style={styleListItem}>
              <Link href="https://twitter.com/ruben_wqc" style={styleLinkListItem}>
                {/*<LogoTwitter24 arial-label="Twitter" />*/}
              </Link>
              <Link href="https://github.com/rubenqc" style={styleLinkListItem}>
                {/*<LogoGithub24 arial-label="Github" />*/}
              </Link>
              <Link href="https://www.instagram.com/rubenwqc/" style={styleLinkListItem}>
                {/*<LogoInstagram24 arial-label="Instagram" />*/}
              </Link>
            </ListItem>
          </UnorderedList>
        </Column>
        <Column
          style={{
            textAlign: 'left',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
          sm={12}
          md={3}
          lg={6}
          className="column__interline"
        >
          <UnorderedList>
            <ListItem style={styleListItem}>
              <span style={styleLinkListItem}>We can change de world!</span>
            </ListItem>
            <ListItem style={styleListItem}>
              <span style={styleLinkListItem}>Copyright © 2021 Promitia</span>
            </ListItem>
          </UnorderedList>
        </Column>
      </Row>
      <Row>
        <Column
          style={{
            textAlign: 'left',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
          sm={12}
          md={{ span: 1, offset: 2 }}
          lg={{ span: 2, offset: 4 }}
        >
          <Image src={logoPromitia.src} alt="Promitia" width={40} height={40} />
        </Column>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
