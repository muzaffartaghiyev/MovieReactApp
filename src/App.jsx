import AppRouter from "./router/AppRouter"
import AuthProvider from "./context/AuthProvider"

import { ToastContainer } from "react-toastify";

import "./App.css"


function App() {

  return (
    <>
        <AppRouter/>
        <ToastContainer />
    </>
  )
}

export default App
