import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2ea06b;
  border-radius: 7px;
  color: #fff;
  display: flex;
  gap: 3rem;
  padding: 1rem;

  button {
    background-color: transparent;
    border: none;
    color: #fff;

    &:hover {
      cursor: pointer;
      color: #92fac9;
    }
  }
`;
