import React, { FunctionComponent } from "react";
import { Container, Photo, Text } from "./styles";
import { useFirebase } from "src/hooks";

interface MessageProps {
  message: any;
}

export const Message: FunctionComponent<MessageProps> = ({
  message: { text, uid, photoURL },
}) => {
  const { auth } = useFirebase();

  const isOwnMessage = uid === auth.currentUser?.uid;

  return (
    <Container own={isOwnMessage}>
      <Photo own={isOwnMessage} src={photoURL} />
      <Text own={isOwnMessage}>{text}</Text>
    </Container>
  );
};
