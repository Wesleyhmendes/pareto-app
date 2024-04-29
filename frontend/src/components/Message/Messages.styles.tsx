import styled from 'styled-components';

export const Section = styled.section`
  @media (min-width: 320px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
  border: 1px solid #29865b;
  border-radius: 8px;
  position: relative;
  height: 90vh;
  margin: 0 auto;

  .messages-container {
  max-height: 77vh;
  overflow-y: auto;
}
`;

export const Message = styled.div`
  p {
    border: 2px solid #29865b;
    background-color: #92fac9;
    border-radius: 1rem 1rem 2rem 1rem;
    margin: 1rem;
    padding: 1rem;
    }
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
