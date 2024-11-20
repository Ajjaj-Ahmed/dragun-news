import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to={`/category/01`}></Navigate>
            },
            {
            path:`/category/:id`,
            element:<h2>Category</h2>
            }
    ]
    },
    {
        path:'news',
        element: <h1>This is news</h1>
    },
    {
        path:'auth',
        element: <h1>This is login</h1>
    },
    {
        path:'*',
        element: <h1>error</h1>
    }
])

export default router
   