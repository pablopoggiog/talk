import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-items: flex-start;
  width: 100%;

  @media all and (min-width: 500px) {
    width: 100px;
    margin-right: auto;
  }
`;
