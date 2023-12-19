import useMenu from "../../utils/Hooks/useMenu";
import Menu from "./Menu";
const UnfilteredMenu=()=>{
    
    const [id,resInfo,resInfoo,resInfo0,offers,categories]=useMenu([]);
   
    return(<Menu props={[id,resInfo,resInfoo,resInfo0,offers,categories]}/>
    );
    
        
}
export default UnfilteredMenu;