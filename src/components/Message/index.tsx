import React, { FunctionComponent } from "react";
import { useFirebase, useDate } from "src/hooks";
import { MessageInterface } from "src/types";
import { Container, Photo, Text, DateFooter, Content } from "./styles";

interface MessageProps {
  message: MessageInterface;
}

export const Message: FunctionComponent<MessageProps> = ({
  message: { text, uid, photoURL, createdAt },
}) => {
  const { auth } = useFirebase();

  const { timeAgo } = useDate(createdAt);

  const isOwnMessage = uid === auth.currentUser?.uid;

  return (
    <Container own={isOwnMessage}>
      <Content own={isOwnMessage}>
        <Photo own={isOwnMessage} src={photoURL} />
        <Text own={isOwnMessage}>{text}</Text>
      </Content>
      <DateFooter own={isOwnMessage}>{timeAgo}</DateFooter>
    </Container>
  );
};
