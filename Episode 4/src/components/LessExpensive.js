import useRestList from "../../utils/Hooks/useRestList";
import ResContainer from "./ResContainer";
const LessExpensive=()=>{
    const resList=useRestList();
    const filtered=resList.filter((res)=>res?.info?.costForTwo.match(/(\d+)/)[0]<300)
   
    return(
        <div>
            <ResContainer restList={filtered}/>
        </div>
    )
}
export default LessExpensive;