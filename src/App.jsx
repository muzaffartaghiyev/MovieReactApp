import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter"


import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <AuthProvider>  
          <AppRouter/>
          <ToastContainer/>
      </AuthProvider>
    </div>
  );
};

export default App;