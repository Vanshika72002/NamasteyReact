import { imgurl } from "../../utils/constants";

const ResCard=(props)=>{
    const {resData}=props;
    // const image_id=resData.info.cloudinaryImageId;
    // console.log(image_id);
    return(
        
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
    </div>);
    //Higher Order Component
    
}
export const withLabel=(ResCard)=>{
    return(props)=>{
        const {resData}=props;
        return(
            <div>
                <label className="absolute ml-[146px] mt-2  bg-black text-slate-600">{resData.info.aggregatedDiscountInfoV3.header+" "+resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <ResCard {...props}/>
            </div>
        );
    };
};
export default ResCard;