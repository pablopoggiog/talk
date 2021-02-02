import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Photo, Text, DateFooter, Content } from "./styles";
import { useFirebase, useDate } from "src/hooks";

interface MessageProps {
  message: any;
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
