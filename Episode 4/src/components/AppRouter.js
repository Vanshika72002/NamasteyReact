import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { Top } from "./Top";
import AppLayout from "./AppLayout";
import Unfiltered from "./Unfiltered";
import FastDelivery from "./FastDelivery";
import LessExpensive from "./LessExpensive";
import Range from "./Range";
import UserChoice from "./UserChoice";
import Vegmenu from "./Vegmenu";
import UnfilteredMenu from "./UnfilteredMenu";
import CheckingDarkMode from "./CheckingDarkMode";
import CartPage from "./CartPage";
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Unfiltered/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/Top",
                element:<Top/>
            },
            {
                path:"/FastDelivery",
                element:<FastDelivery/>
            },
            {
                path:"/LessThan300",
                element:<LessExpensive/>
            },
            {
                path:"/between300and600",
                element:<Range/>
            },
            {
                path:"/userChoice",
                element:<UserChoice/>
            },
            {
                path:"/restaurants/:id",
                element:<UnfilteredMenu/>
            },
            {
                path:"/restaurants/:id/vegonly",
                element:<Vegmenu/>
            },
            {
                path:"/check",
                element:<CheckingDarkMode/>
            },
            {
                path:"/usercart",
                element:<CartPage/>
            }
        ]
    }
]);
export default AppRouter;