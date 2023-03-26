import React, { useState } from "react";
// firebase imports
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
// redux imports
import { authActions } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";

import styles from "./Signup.module.css";
import { Link,useNavigate } from "react-router-dom";

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        const formDataCopy = { email };
        formDataCopy.timestamp = serverTimestamp();
        setDoc(doc(db, "users", user.uid), formDataCopy);
        dispatch(authActions.login({ email: user.email, id: user.uid }));
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
        <p>
          already a member? <Link to="/login">login here</Link>
        </p>
        <div className={styles.google}>
        <p>or</p>
        <GoogleAuth/>
        </div>
      </form>
    </div>
  );
}
