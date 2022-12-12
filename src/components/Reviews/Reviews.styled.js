import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;
`;

export const Author = styled.p`
  font-weight: 600;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
