import Offers from "./Offers";
const CouponDisplay=(props)=>{

        const {couponData}=props;
        
        const offers=couponData?.card?.info?.offerTags;
        return(
            <div className="flex">
                {/* {console.log("offers==")};
                {console.log(couponData)}; */}
                {/* <h1>{couponData?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.couponCode}|</h1>
                            <h1>{couponData?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.description}</h1> */}

                {/* <h1>[0].subTitle</h1> */}
                {offers.map((offer)=><Offers offerData={offer}/>)}
            </div>
        )
}
export default CouponDisplay;