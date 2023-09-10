import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon/Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
/* 	React.useEffect(() => {
		let trigger = () => window.innerWidth < BREAKPOINTS.tablet ? setShowMobileMenu(true) : setShowMobileMenu(false)
		window.addEventListener('resize', trigger)
		return () => window.removeEventListener('resize', trigger)
	}, []) */

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
	// <Icon id="menu" onClick={() => setShowMobileMenu(true)} />

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
				<MobileActions>
					<Icon id="shopping-bag" />
					<Icon id="search" />
					<Icon id="menu" style={{cursor:'pointer'}} onClick={() => setShowMobileMenu(true)} />
				</MobileActions>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

	@media ${p => p.theme.queries.tablet} {
		border-top: 4px solid ${COLORS.gray[900]};
		justify-content: space-between;
	}
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

	@media ${p => p.theme.queries.tablet} {
		display: none;
	}
`;

const MobileActions = styled.div`
	display: none;
	@media ${p => p.theme.queries.tablet} {
		display: flex;
		align-self: flex-end;
		gap: 1em;
		margin-left: auto;
	}
`

const Side = styled.div`
  flex: 1;
	@media ${p => p.theme.queries.tablet} {
		flex: unset;
	}
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
