import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {  createUserWithEmailAndPassword } from "firebase/auth";

import {authActions} from '../redux/auth/authSlice'
import { useDispatch } from "react-redux";

import styles from './Signup.module.css';
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        dispatch(authActions.login({email:user.email,id:user.uid}));
          
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
      
  }

  return (
    <div className={styles.container}>
      <div>Sign up</div>
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
        <button type="submit">Signup</button>
        <p>already a member?  <Link to='/login'>login here</Link></p>
      </form>
     
    </div>
  );
}
