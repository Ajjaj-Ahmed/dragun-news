import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoriesNews from "../pages/CategoriesNews";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={`/category/01`}></Navigate>
            },
            {
            path:`/category/:id`,
            element:<CategoriesNews></CategoriesNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
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
   