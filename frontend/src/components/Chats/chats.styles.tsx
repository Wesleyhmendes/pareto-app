import styled from 'styled-components';

export const Section = styled.section`
  @media (min-width: 320px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px solid red;

  ul {
    background-color: #dadada;
    border-radius: 1rem;
    margin: 0 auto;
    width: 95%;
    
    li {
      align-items: center;
      border-radius: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      height: 4rem;
      text-align: center;
      list-style: none;

      &:hover {
        cursor: pointer;
        background-color: #4fce6f;
      }
    }
  }

`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
      color: #ffffff;
    }
  }
`;
