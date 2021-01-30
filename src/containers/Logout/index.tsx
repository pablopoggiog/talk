import React, { FunctionComponent } from "react";
import firebase from "firebase/app";

interface LogoutProps {
  auth: firebase.auth.Auth;
}

export const Logout: FunctionComponent<LogoutProps> = ({ auth }) => {
  const logout = () => auth.signOut();

  return (
    auth.currentUser && (
      <div>
        Login
        <button onClick={logout}>Log Out</button>
      </div>
    )
  );
};
