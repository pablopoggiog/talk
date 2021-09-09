import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import "firebase/firestore";
import { Message } from "src/components";
import { MessageInterface } from "src/types";
import { Container } from "./styles";

interface MessagesListProps {
  messages?: MessageInterface[];
}

export const MessagesList: FunctionComponent<MessagesListProps> = ({
  messages,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, messages]);

  return (
    <Container onClick={() => scrollToBottom}>
      {messages &&
        messages.map((msg) => <Message key={msg.id} message={msg} />)}

      <div ref={messagesEndRef} />
    </Container>
  );
};
