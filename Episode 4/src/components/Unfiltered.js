import useRestList from "../../utils/Hooks/useRestList";
import ResContainer from "./ResContainer";
const Unfiltered=()=>{
    
    const list=useRestList();
    
    return(
        <ResContainer restList={list}/>
    )
}
export default Unfiltered;