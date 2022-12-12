import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  justify-content: center;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px;
  width: 300px;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.hoverColor};
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  border: none;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
