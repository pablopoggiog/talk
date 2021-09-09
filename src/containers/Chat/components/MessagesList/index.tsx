import React, { FunctionComponent } from "react";
import "firebase/firestore";
import { Message, MessageInterface } from "src/components";
import { Container } from "./styles";

interface MessagesListProps {
  messages?: MessageInterface[];
}

export const MessagesList: FunctionComponent<MessagesListProps> = ({
  messages,
}) => {
  return (
    <Container>
      {messages &&
        messages.map((msg) => <Message key={msg.id} message={msg} />)}
    </Container>
  );
};
