import ResCard,{withLabel} from "./ResCard";
import { Filter } from "./Filter";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const ResContainer=(props)=>{
    const ResCardWithLabel=withLabel(ResCard);
    const list=props.restList;
    if(list.length===0) return <Shimmer/>
    return(
        <div>
        <Filter/>
        <div className="flex border border-black  m-1 flex-wrap">
            {list.map((restaurant)=>(<Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                {(restaurant.info.aggregatedDiscountInfoV3)?(<ResCardWithLabel resData={restaurant}/>):(<ResCard resData={restaurant}/>)}</Link>))}
        </div>
        </div>
    );
};
export default ResContainer;
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6906285&lng=77.2764329&restaurantId=378093&catalog_qa=undefined&submitAction=ENTER
//Menu api