import { createBrowserRouter } from "react-router-dom";
import { Body } from "../components/Body";
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<Body/>
    }
])
export default AppRouter;