import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";

export const Login: FunctionComponent = () => {
  const { loginWithGoogle } = useFirebase();

  return (
    <div>
      Login
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};
