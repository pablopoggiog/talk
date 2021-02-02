import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Photo, Text, DateFooter, Content } from "./styles";
import { useFirebase } from "src/hooks";

interface MessageProps {
  message: any;
}

export const Message: FunctionComponent<MessageProps> = ({
  message: { text, uid, photoURL, createdAt },
}) => {
  const { auth } = useFirebase();

  const isOwnMessage = uid === auth.currentUser?.uid;

  const [daysAgo, setDaysAgo] = useState("");

  // i had to wrap this in a useEffect (and create the state above), b/c otherwise it cries when i send a new message that createdAt is undefined, donno why yet
  useEffect(() => {
    if (createdAt) {
      const realDate = new Date(
        createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
      );

      // i compare the time between now and the date of the message, in days
      const now = Date.now();
      const diffTime = Math.abs(Number(realDate) - now);
      const diffMinutes = Math.ceil(diffTime / (1000 * 60));
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const lessThanADay = diffHours < 24;
      const lessThanAnHour = diffMinutes < 60;

      setDaysAgo(
        new Intl.RelativeTimeFormat("es", {
          numeric: "auto",
        }).format(
          -Math.abs(
            lessThanADay ? (lessThanAnHour ? diffMinutes : diffHours) : diffDays
          ),
          lessThanADay ? (lessThanAnHour ? "minute" : "hour") : "day"
        )
      );
    }
  }, [createdAt]);

  return (
    <Container own={isOwnMessage}>
      <Content own={isOwnMessage}>
        <Photo own={isOwnMessage} src={photoURL} />
        <Text own={isOwnMessage}>{text}</Text>
      </Content>
      <DateFooter own={isOwnMessage}>{daysAgo}</DateFooter>
    </Container>
  );
};
