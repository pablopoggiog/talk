import styled from "styled-components";
import { Button } from "src/components";
import image from "src/assets/pink.jpg";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const ChatsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
  overflow: scroll;
  height: 70vh;
  border-radius: 0.5em;
  margin: 3vh 0;
  background-image: url(${image});
  background-size: cover;
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
