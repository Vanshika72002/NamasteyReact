import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "../src/components/AppRouter";
import { RouterProvider } from "react-router-dom";
// const El=()=>{
//     return(
//         <div>
//             <NavBar/>
//             <Filter/>
//             <ResContainer/>
//             <Footer/>
//         </div>
//     )
// }
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);