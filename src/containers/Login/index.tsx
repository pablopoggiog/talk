import React, { FunctionComponent } from "react";
import firebase from "firebase/app";

interface LoginProps {
  auth: firebase.auth.Auth;
}

export const Login: FunctionComponent<LoginProps> = ({ auth }) => {
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      Login
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};
