//Displaying restaurants with 4.0+ rating
import ResContainer from "./ResContainer";
import useRestList from "../../utils/Hooks/useRestList";
export const Top=()=>{
    const list=useRestList();
    const filtered=list.filter((res)=>res?.info?.avgRating>4);
    return(
        <ResContainer restList={filtered}/>
   );
}