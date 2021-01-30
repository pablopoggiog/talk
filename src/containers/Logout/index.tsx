import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";

export const Logout: FunctionComponent = () => {
  const { auth, logout } = useFirebase();

  return (
    auth.currentUser && (
      <div>
        Login
        <button onClick={logout}>Log Out</button>
      </div>
    )
  );
};
