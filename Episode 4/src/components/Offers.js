const Offers=(props)=>{
    const {offerData}=props;
    return(
        <div className="border border-slate-300 m-1 grid p-2">
                
                <div className="text-sm">{offerData.info.header}</div>
                
                <div className="text-xs flex">
                    <div>{offerData.info.couponCode}</div>
                    <div>{offerData.info.description}</div>
                </div>

        </div>
            )
}
export default Offers;
