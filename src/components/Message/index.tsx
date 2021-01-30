import React, { FunctionComponent } from "react";
import { Container, Photo, Text } from "./styles";
import { useFirebase } from "src/hooks";

interface MessageProps {
  message: any;
}

export const Message: FunctionComponent<MessageProps> = ({
  message: { text, uid, photoUrl },
}) => {
  const { auth } = useFirebase();

  console.log("message id ", uid, "user id", auth.currentUser?.uid);

  const isOwnMessage = uid === auth.currentUser?.uid;

  return (
    <Container own={isOwnMessage}>
      <Photo src={photoUrl} />
      <Text>{text}</Text>
    </Container>
  );
};
