import ResContainer from "./ResContainer";
import useRestList from "../../utils/Hooks/useRestList";
import { useParams } from "react-router-dom";
import UserContext from "../../utils/Hooks/UserContext";
import { useContext } from "react";
const UserChoice=()=>{  
        const {loggedinuser}=useContext(UserContext);
        // console.log(useParams());
        const resList=useRestList();
        console.log(resList);
        console.log(loggedinuser);
        const filtered=resList.filter((res)=>res?.info?.name.toLowerCase().includes(loggedinuser.toLowerCase()))
        console.log(filtered);
        if(filtered.length!=0){
                return(
                        <>
                
                        <div>
                        <h1 className="m-2">
                                showing results for "{loggedinuser}"
                        </h1>
                         <ResContainer restList={filtered}/>
                     </div>
                </>
                )
        }
        
        else{
                return(
                        <>
                        <div>No results for "{loggedinuser}"</div>
                        <ResContainer restList={resList}/>
                        </>
                )
        }
        // const {id}=useParams();
        // console.log("x=");
        
        // return(
        //     <
        // )
    
}
export default UserChoice;