import useRestList from "../../utils/Hooks/useRestList";
import ResContainer from "./ResContainer";
const Range=()=>{
    const resList=useRestList();
    const filtered=resList.filter((res)=>(res?.info?.costForTwo.match(/(\d+)/)[0]>300&&res?.info?.costForTwo.match(/(\d+)/)[0]<600))
    if(filtered)
        return(
            <div>
                <ResContainer restList={filtered}/>
            </div>
        )
}
export default Range;