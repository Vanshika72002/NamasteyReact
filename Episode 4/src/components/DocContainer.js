import DocCard from "./DocCard";
import { Filter } from "./Filter";
import Shimmer from "./Shimmer";
const DocContainer=(props)=>{
    const list=props.restList;
    return list.length===0?<Shimmer/>:(
        <div>
        <Filter/>
        <div className="flex border border-black  m-1 flex-wrap">
            {list.map((restaurant)=>( <DocCard key={restaurant.info.id} resData={restaurant} /> ))}
        </div>
        </div>
    );
};
export default DocContainer;