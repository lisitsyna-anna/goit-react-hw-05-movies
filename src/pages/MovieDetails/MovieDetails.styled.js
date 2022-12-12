import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const MainSection = styled.section`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const MovieName = styled.h3`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;
`;

export const AdditionalSection = styled.section`
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
`;

export const AdditionalTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.l};

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
