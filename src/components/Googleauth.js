import { async } from "@firebase/util";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../assets/svg/googleIcon.svg";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

import {authActions} from '../redux/auth/authSlice'
import { useDispatch } from "react-redux";

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;


      //This is to check is user already exists in database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(user);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          timestamp: serverTimestamp(),
        });

        
      }
      dispatch(authActions.login({email:user.email,id:user.uid}));

        navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="socialLogin">
      {/* <p>Sign {location.pathname == "/sign-up" ? "up" : "in"} with</p> */}
      <div className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" style={{width:"30px",marginTop:"15px"}} />
      </div>
    </div>
  );
}
