import firebase from "firebase/app";

export interface MessageInterface {
  text: string;
  uid: string;
  photoURL: string;
  createdAt: Record<string, number>;
  id: string;
}

export interface UseFirebaseReturn {
  auth: firebase.auth.Auth;
  user: firebase.User | null | undefined;
  firestore: firebase.firestore.Firestore;
  messages: MessageInterface[];
  loginWithGoogle: () => void;
  logout: () => Promise<void>;
  sendMessage: (text: string) => void;
  loading: boolean;
}

export interface UseDateReturn {
  timeAgo: string;
}

export type UseDate = (created: Record<string, number>) => UseDateReturn;
