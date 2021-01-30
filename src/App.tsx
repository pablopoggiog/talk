import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { Chat, Login } from "src/containers";

firebase.initializeApp({
  apiKey: "AIzaSyBQLgUQPLwLJXFI-aLv9nZqSxMNvMbYILI",
  authDomain: "react-ts-talk.firebaseapp.com",
  projectId: "react-ts-talk",
  storageBucket: "react-ts-talk.appspot.com",
  messagingSenderId: "922795508972",
  appId: "1:922795508972:web:97b80396f1dae5b26bd1c9",
  measurementId: "G-YPZSXBZJ3Y",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <section>{user ? <Chat /> : <Login />}</section>
    </div>
  );
};

export default App;
