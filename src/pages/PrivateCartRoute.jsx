import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Cart from "./Cart";

function PrivateCartRoute() {
  const user = useSelector((state) => state.auth.user);
  return(
    <>
    {user ? <Cart/>:<Login/>}
    </>
  )
  
}


export default PrivateCartRoute;