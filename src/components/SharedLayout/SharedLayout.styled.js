import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xl};

  &.active {
    background-color: ${p => p.theme.colors.hoverColor};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.hoverColor};
    color: ${p => p.theme.colors.white};
  }
`;
