import firebase from "firebase/app";

export interface MessageInterface {
  text: string;
  uid: string;
  photoURL: string;
  createdAt: Record<string, number>;
  id: string;
}

export interface useFirebaseReturn {
  auth: firebase.auth.Auth;
  user: firebase.User | null | undefined;
  firestore: firebase.firestore.Firestore;
  messages: MessageInterface[];
  loginWithGoogle: () => void;
  logout: () => Promise<void>;
  sendMessage: (text: string) => void;
  loading: boolean;
}
