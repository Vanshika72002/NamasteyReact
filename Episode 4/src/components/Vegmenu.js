import useMenu from "../../utils/Hooks/useMenu";
import Menu from "./Menu";
const Vegmenu=()=>{
        const [id,resInfo,resInfoo,resInfo0,offers]=useMenu([]);
        let filtered;
        // const filtered=resList.filter((res)=>res?.info?.costForTwo.match(/(\d+)/)[0]<300)
        if(resInfo){
            filtered=resInfo.filter((menu)=>menu?.card?.info?.itemAttribute.vegClassifier=='VEG');
        }
        
        return(
            <Menu props={[id,filtered,resInfoo,resInfo0,offers]} />
            // id={} 
        );

}
export default Vegmenu;