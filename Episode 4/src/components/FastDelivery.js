import useRestList from "../../utils/Hooks/useRestList";
import ResContainer from "./ResContainer";
import ResContainer from "./ResContainer";
const FastDelivery=()=>{
    const resList=useRestList();
    const filtered=resList.filter((res)=>res?.info?.sla.deliveryTime<=30)
    return(
        <div>
            <ResContainer restList={filtered}/>
        </div>
    )
}
export default FastDelivery;