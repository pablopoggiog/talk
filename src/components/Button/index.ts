import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 0.4em;
  background-color: lightBlue;
  min-width: 5em;
  border: none;
  cursor: pointer;
  padding: 1em;
  width: ${({ width }) => width || "auto"};

  &:hover {
    background-color: lightGrey;
  }
`;
