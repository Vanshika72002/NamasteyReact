import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../../utils/Hooks/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
const AppLayout=()=>{
    const [textvalue,setvalue]=useState("");
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedinuser:textvalue,setvalue}}>
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
        /</UserContext.Provider>{/* </UserContext.Provider> */}
        </Provider>
    )
}
export default AppLayout;