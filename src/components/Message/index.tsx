import React, { FunctionComponent } from "react";

interface MessageProps {
  message: any;
}

export const Message: FunctionComponent<MessageProps> = ({
  message: { text },
}) => {
  return <div>{text}</div>;
};
