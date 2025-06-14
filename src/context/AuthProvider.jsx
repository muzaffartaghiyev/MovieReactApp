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

  
  // Register
  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("Registration is successful, Now you can login");
  };

  // Login
  const loginUser = async (email, password) =>{
    await signInWithEmailAndPassword(auth, email, password)

    toastSuccess("You logged in Successfully")
  }


  return (
    <AuthContext.Provider
      value={{createUser,loginUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;