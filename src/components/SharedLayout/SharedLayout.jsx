import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import FadeLoader from 'react-spinners/ClipLoader';

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
          <FadeLoader
            color="#2196F3"
            cssOverride={{
              display: 'block',
              margin: '0 auto',
            }}
            height={50}
            loading
            margin={0}
            width={5}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
