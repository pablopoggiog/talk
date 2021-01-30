import styled from "styled-components";

interface ContainerProps {
  own: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: ${({ own }) => (own ? "blue" : "red")};
`;

export const Photo = styled.img``;

export const Text = styled.p``;
