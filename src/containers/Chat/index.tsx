import React, { FunctionComponent, useState } from "react";
import "firebase/firestore";
import { useFirebase } from "src/hooks";
import { MessagesList } from "./components";
import { Container, NewMessageForm, Input, SubmitButton } from "./styles";

export const Chat: FunctionComponent = () => {
  const { messages, sendMessage } = useFirebase();

  const [newMessage, setNewMessage] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Container>
      <MessagesList messages={messages} />
      <NewMessageForm onSubmit={onSubmit}>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></Input>
        <SubmitButton type="submit">🔥</SubmitButton>
      </NewMessageForm>
    </Container>
  );
};
