import styled, { keyframes } from "styled-components";

const spin = keyframes`
        0% {
          transform: rotate(0deg);
        }
  
        100% {
          transform: rotate(360deg);
        }
      `;

export const Loader = styled.div`
  border: 16px solid lightBlue;
  border-top: 16px solid rgba(255, 219, 220);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  animation: ${spin} 2.5s linear infinite;
  margin: auto;
`;
