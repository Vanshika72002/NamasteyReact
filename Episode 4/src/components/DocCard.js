import { imgurl } from "../../utils/constants";
import { Link } from "react-router-dom";
const DocCard=(props)=>{
    const {resData}=props;
    // const image_id=resData.info.cloudinaryImageId;
    // console.log(image_id);
    return(
      <Link to={"./restaurants/"+resData.info.id}>  
    <div className="w-72 border m-1 bg-slate-500 p-1 border-black hover:p-3 cursor-pointer" >
        <div>
            <img className="h-60 w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info?.cloudinaryImageId}/>
        </div>
        <div>
            <h1 className="font-bold">
                {resData?.info?.name}
            </h1>
            <p>
                {resData?.info?.aggregatedDiscountInfoV3?.header}
            </p>
            <p>
            {resData?.info?.costForTwo}
            </p>
            <p>
                {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
            </p>
            <p>
                {resData?.info?.areaName}
            </p>
            <p>
                {resData?.info?.avgRating}
            </p>
            <p>
                {resData?.info?.sla.slaString}
            </p>
             
       </div>
    </div>
    </Link>)
}
export default DocCard;