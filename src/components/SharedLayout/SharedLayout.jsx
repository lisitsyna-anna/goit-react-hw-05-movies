import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import Container from 'components/Container';
import { Header, NavList, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container as="div" maxWidth={1250} pl={15} pr={15} ml={'auto'} mr={'auto'}>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/" end>
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
