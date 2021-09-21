import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";
import { Spinner } from "src/components";
import { Chat, Login, Logout } from "src/containers";
import { Container } from "./styles";

const App: FunctionComponent = () => {
  const { user, loading } = useFirebase();

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : user ? (
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
