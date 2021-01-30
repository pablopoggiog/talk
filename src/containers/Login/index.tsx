import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";
import { Button } from "src/components";
import { Container } from "./styles";

export const Login: FunctionComponent = () => {
  const { loginWithGoogle } = useFirebase();

  return (
    <Container>
      <Button onClick={loginWithGoogle}>Login with Google</Button>
    </Container>
  );
};
