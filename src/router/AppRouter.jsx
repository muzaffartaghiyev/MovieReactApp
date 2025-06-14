import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Login from "../pages/Login"
import Main from "../pages/Main"
import Register from "../pages/Register"


const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>},
    {
      path:"register",
      element:<Register/>
    },
    {
      path:'login',
      element:<Login/>
    },
])

export default function AppRouter(){
    return <RouterProvider router={router} />
}