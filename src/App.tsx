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
          <Logout />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
};

export default App;
