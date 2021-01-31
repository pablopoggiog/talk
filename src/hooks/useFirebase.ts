import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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
const firestore = firebase.firestore();

export const useFirebase = () => {
  const [user] = useAuthState(auth);

  const logout = () => auth.signOut();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = (text: string) => {
    const asyncSending = async () => {
      const { uid, photoURL } = auth.currentUser!;

      await messagesRef.add({
        text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
    };
    try {
      asyncSending();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    auth,
    user,
    firestore,
    messages,
    loginWithGoogle,
    logout,
    sendMessage,
  };
};
