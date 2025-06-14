import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Main from "../pages/Main"
import Layout from "../pages/Layout"
// import Layout from "../pages/Layout"




const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Main/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
        ]
    },
        

])

export default function AppRouter(){
    return <RouterProvider router={router} />
}