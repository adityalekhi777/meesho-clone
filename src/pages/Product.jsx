import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import styles from "./Product.module.css"

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Product() {
    const data = useSelector(state => state.products.data)
    const page = useSelector(state => state.products.page)
    // const user = useSelector(state => state.auth)
    const {id} =useParams();
    let index = (id - ((page-1)*10))-1;
    const item = data[index];
    const [product,setProduct] = useState(item);
    // console.log(user);

    //  async function addHandler(){
    //     const docRef = doc(db, "users", user.uid);
    //     const docSnap = await getDoc(docRef);

    //   if (docSnap.exists()) {
    //     await setDoc(doc(db, "users", user.uid), {
    //       cart: [product]
    //     });
    //  }
    // }

    

    function ratecolor(rate){
        if(rate < 3){
          return "red"
        }else if(rate < 3.5){
          return "orange"
        }else{
          return "green"
        }
      }

  return (
    <div className={styles.container}>
        <div className={styles.display}>
            <img src={product.image} alt=""/>
            <button>Add to Cart</button>
        </div>
        <div className={styles.details}>
            <div className={styles["name_price"]}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>₹{product.price}</div>
                <div>
                    <span className={styles[ratecolor(product.rating.rate)]}>{product.rating.rate}</span>
                    <span>  {product.rating.count} Ratings</span>
                </div>
                <div>Free Delivery</div>
            </div>
            <div className={styles["size"]}>
                <div className={styles.title}>Select Size</div>
                <div>Free Size</div>
            </div>
            <div className={styles["description"]}>
                <div className={styles.title}>Product Details</div>
                <div>{product.description}</div>
            </div>
        </div>
        
    </div>
  )
}
