import React, { FunctionComponent } from "react";
import "firebase/firestore";
import { Message } from "src/components";
import { useFirebase } from "src/hooks";

export const Chat: FunctionComponent = () => {
  const { messages } = useFirebase();

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
