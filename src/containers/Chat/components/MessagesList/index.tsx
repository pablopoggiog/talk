import React, { FunctionComponent } from "react";
import "firebase/firestore";
import { Message } from "src/components";
import { Container } from "./styles";

interface MessagesListProps {
  messages?: any[];
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
