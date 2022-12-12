import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]}px;
`;

export const ActorItem = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
`;

export const ActorImg = styled.img`
  width: 100%;
  height: 398px;
  object-fit: cover;
`;
