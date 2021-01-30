import React from "react";

export const Chat = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  return <div>Chat</div>;
};
