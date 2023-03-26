import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
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