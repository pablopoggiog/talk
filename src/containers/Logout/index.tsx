import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";
import { Button } from "src/components";
import { Container } from "./styles";

export const Logout: FunctionComponent = () => {
  const { auth, logout } = useFirebase();

  return (
    auth.currentUser && (
      <Container>
        <Button onClick={logout}>Log Out</Button>
      </Container>
    )
  );
};
