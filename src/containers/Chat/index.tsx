import React, { FunctionComponent, useState } from "react";
import "firebase/firestore";
import { Message } from "src/components";
import { useFirebase } from "src/hooks";
import {
  Container,
  NewMessageForm,
  Input,
  SubmitButton,
  ChatsList,
} from "./styles";

export const Chat: FunctionComponent = () => {
  const { messages, sendMessage } = useFirebase();

  const [newMessage, setNewMessage] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(newMessage);
    console.log(newMessage);
    setNewMessage("");
  };

  return (
    <Container>
      <ChatsList>
        {messages &&
          // @ts-ignore
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </ChatsList>
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
