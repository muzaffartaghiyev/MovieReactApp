import { createUserWithEmailAndPassword } from 'firebase/auth'

import {createContext} from 'react'

import {toastSuccess} from "../helpers/ToastNotify"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const createUser = async(email,password,displayName)=>{
    await createUserWithEmailAndPassword(auth, email, password)

    toastSuccess("success")

  }

  return (
    <AuthContext.Provider value={{createUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider