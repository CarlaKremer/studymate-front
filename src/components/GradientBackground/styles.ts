import styled from 'styled-components';

const Gradient = styled.div`
  background: radial-gradient(circle at bottom, #EC6E80, #010042);
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
  box-sizing: border-box;
  justify-content: start;
  @media (max-width: 1049px) {
    height: 100%
  }
`;

export default Gradient;
