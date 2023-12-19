const Menu=(props)=>{
    console.log("resinfo in menu");
      const resInfo=props.props[0];
      const resInfoo=props.props[1];
      const resInfo0=props.props[2];
      const offers =props.props[3]
      console.log(resInfo);
      console.log(resInfoo);
      console.log(resInfo0);
    
        return(
            <h1>{props.resInfo}</h1>
        )
}
export default Menu;