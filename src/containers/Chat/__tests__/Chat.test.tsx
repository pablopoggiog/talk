import { screen, render } from "@testing-library/react";
import { MessageInterface } from "src/types";
import { Chat } from "..";

const mockedSendMessage = jest.fn();

window.HTMLElement.prototype.scrollIntoView = jest.fn();

const messagesFromFirebase: MessageInterface[] = [
  {
    id: "1",
    text: "howdy!",
    uid: "1",
    photoURL: "asdf",
    createdAt: { a: 1 },
  },
  {
    id: "2",
    text: "hey",
    uid: "2",
    photoURL: "asdf",
    createdAt: { a: 1 },
  },
  {
    id: "3",
    text: "sup",
    uid: "3",
    photoURL: "asdf",
    createdAt: { a: 1 },
  },
  {
    id: "4",
    text: "🤠",
    uid: "4",
    photoURL: "asdf",
    createdAt: { a: 1 },
  },
];

jest.mock("src/hooks/", () => ({
  useFirebase: () => ({
    messages: messagesFromFirebase,
    sendMessage: mockedSendMessage,
    auth: { currentUser: "1" },
  }),
  useDate: () => ({
    timeAgo: "1",
  }),
}));

describe("Chat", () => {
  it("displays the messages received from useFirebase", () => {
    render(<Chat />);

    const messages = messagesFromFirebase.map((message) =>
      screen.getByText(message.text)
    );

    messages.forEach((message) => expect(message).toBeInTheDocument());
  });
});
