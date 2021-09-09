import styled from "styled-components";
import { Button } from "src/components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const NewMessageForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 0.4em;
  border: solid 2.8px grey;
  padding: 0.1em 1em 0;
  width: 60%;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled(Button)``;
