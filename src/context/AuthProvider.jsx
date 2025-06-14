import {createContext} from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../auth/firebase";

import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate  = useNavigate()

  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("Registration is successful");

    navigate("/")

  };


  return (
    <AuthContext.Provider
      value={{createUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;