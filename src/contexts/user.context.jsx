import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  SetCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState(null);
  const value = { currentUser, SetCurrentUser };
  signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      SetCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
