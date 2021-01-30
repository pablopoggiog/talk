import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";
import { Chat, Login, Logout } from "src/containers";
import { Container } from "./styles";

const App: FunctionComponent = () => {
  const { user } = useFirebase();

  return (
    <Container>
      {user ? (
        <>
          <Chat />
          <Logout />{" "}
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
};

export default App;
