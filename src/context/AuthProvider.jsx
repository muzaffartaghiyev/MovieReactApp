import {createContext, useState} from "react";

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

import { toastError, toastSuccess, toastWarn } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const navigate  = useNavigate()
  const [currentUser,setCurrentUser] = useState()

  useEffect(()=>{
      userStateChange()
  },[])
  
  // Register
  const createUser = async (email, password, displayName) => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);

      toastSuccess("Registration is successful, Now you can login");
      navigate('/login')

      updateProfile(auth.currentUser,{
        displayName:displayName,
      })

    }
    catch(error){
      toastError(`Registration Failed.Error: ${error}`)
    }
  };

  // Login
  const loginUser = async (email, password) =>{
    try{
      await signInWithEmailAndPassword(auth, email, password)

      toastSuccess("You logged in Successfully")
      navigate("/")
    }
    catch(error){
      toastError(`Sign In Failed.Error: ${error}`)
    }
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
        toastError(`Google Sign in Failed. Error: ${error}`)
      }
  }

  // Sign Out
  const logout = async()=>{
    try{
      await signOut(auth)
      toastSuccess("Signed out Successfully")
    }
    catch(error){
      toastError(`Sign Out Failed.Error: ${error}`)
    } 
  }

  const userStateChange = ()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setCurrentUser({email:user.email,displayName:user.displayName,photoURL:user.photoURL})
      }else{
        setCurrentUser(false)
      }
    })
  }


  return (
    <AuthContext.Provider
      value={{createUser,loginUser,googleLogin,logout,currentUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;