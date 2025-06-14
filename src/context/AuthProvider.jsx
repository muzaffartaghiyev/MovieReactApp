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
  // Register
  const createUser = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("Registration is successful, Now you can login");
    navigate('/login')
  };

  // Login
  const loginUser = async (email, password) =>{
    await signInWithEmailAndPassword(auth, email, password)

    toastSuccess("You logged in Successfully")

    navigate("/")
  }

  // Login with Google
  
  const googleLogin = async() =>{
      try{
        const provider = new GoogleAuthProvider();
        // Google Sign in pop up
        
          await signInWithPopup(auth, provider)
          toastSuccess("Google Sign is Successful")
          navigate("/")
      }
      catch(error){
        toastError("Google Sign in Failed")
      }

  }


  return (
    <AuthContext.Provider
      value={{createUser,loginUser,googleLogin}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;