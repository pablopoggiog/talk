import React, { FunctionComponent } from "react";
import "firebase/firestore";
import { Message } from "src/components";
import { useFirebase } from "src/hooks";
import { Container } from "./styles";

export const Chat: FunctionComponent = () => {
  const { messages } = useFirebase();

  return (
    <Container>
      {messages &&
        // @ts-ignore
        messages.map((msg) => <Message key={msg.id} message={msg} />)}
    </Container>
  );
};
