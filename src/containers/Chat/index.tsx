import React, { FunctionComponent } from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import { Message } from "src/components";

interface ChatProps {
  firestore: firebase.firestore.Firestore;
}

export const Chat: FunctionComponent<ChatProps> = ({ firestore }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      Chat
      <div>
        {messages &&
          // @ts-ignore
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </div>
    </div>
  );
};
