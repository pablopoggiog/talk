import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MessageInterface, UseFirebaseReturn } from "src/types";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const useFirebase = (): UseFirebaseReturn => {
  const [user, loading] = useAuthState(auth);

  const logout = () => auth.signOut();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");

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
    messages: messages as unknown as MessageInterface[],
    loginWithGoogle,
    logout,
    sendMessage,
    loading,
  };
};
