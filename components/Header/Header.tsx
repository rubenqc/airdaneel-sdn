import React from 'react';
import {
  Header as HeaderCarbon,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderGlobalAction,
} from 'carbon-components-react';
import Image from 'next/image';

import defaultMenu from './menu.json';
import logo from './logo_promitia.png';

const Header = ({ dataMenu = defaultMenu, sideNavEnabled = true }) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <HeaderCarbon aria-label="Promitia" style={{ borderBottom: 'none' }}>
        <SkipToContent />
        {sideNavEnabled && (
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
        )}
        <HeaderName href="/" prefix="Airdaneel SDN">
          &nbsp; | &nbsp; Promitia
          <HeaderGlobalAction aria-label="Promitia">
            <Image src={logo.src} alt="Promitia" width={25} height={25} />
          </HeaderGlobalAction>
        </HeaderName>
        <HeaderNavigation aria-label="Promitia">
          {dataMenu.map(({ name, href }, index) => (
            <HeaderMenuItem key={index} href={href}>
              {name}
            </HeaderMenuItem>
          ))}
        </HeaderNavigation>
        {sideNavEnabled && (
          <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                {dataMenu.map(({ name, href }, index) => (
                  <HeaderMenuItem key={index} href={href}>
                    {name}
                  </HeaderMenuItem>
                ))}
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        )}
      </HeaderCarbon>
    )}
  />
);

export default Header;
