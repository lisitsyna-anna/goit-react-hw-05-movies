import styled from 'styled-components';
export const SearchTitle = styled.h2`
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

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  width: 100%;
  border-radius: 5px;
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 20px -1px ${p => p.theme.colors.hoverColor};
  }
`;

export const MovieName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 600;
`;

export const RealeseDate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[2]}px;
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 398px;
  object-fit: cover;
  border-radius: 5px;
`;
