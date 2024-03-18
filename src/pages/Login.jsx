import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {  signInWithEmailAndPassword } from "firebase/auth";

import {authActions} from '../redux/auth/authSlice'
import { useDispatch } from "react-redux";

import styles from './Signup.module.css';
import { Link, useNavigate } from "react-router-dom";

import  GoogleAuth  from "../components/Googleauth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        dispatch(authActions.login({email:user.email,id:user.uid}));
        navigate("/")
          
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
      
  }

  return (
    <div className={styles.container}>
      <div>Login</div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>not a member?  <Link to='/signup'>signup here</Link></p>
        <div className={styles.google}>
        <p>or</p>
        <GoogleAuth/>
        </div>
      </form>
     
    </div>
  );
}
