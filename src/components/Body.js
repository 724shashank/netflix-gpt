import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./Browse";
import Login from "./Login";


const Body=()=>{
    
   
   
    const AppRouter = createBrowserRouter([
        { path:"/",element:<Login />},
        { path:"/browse",element:<Browse />},
     ])
    return (
        <>
           <RouterProvider router={AppRouter} />
        </>
    )
}

//Note:This means that routing context is available only within Children Elements of Body.


export default Body;