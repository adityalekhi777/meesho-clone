import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Product.module.css';

import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import {productActions} from '../redux/products/productReducer'

export default function Product() {
  const data = useSelector((state) => state.products.data);
  const page = useSelector((state) => state.products.page);
  // const user = useSelector(state => state.auth)
  const { id } = useParams();
  let index = id - (page - 1) * 10 - 1;
  const item = data[index];
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const docRef = doc(db, 'products', id)
    getDoc(docRef).then((doc) => {
      setProduct({...doc.data(),uui:doc.id})
    });
  }, []);

  function add_cart(obj){
    dispatch(productActions.addItemToCart(obj))
  }


  function ratecolor(rate) {
    if (rate < 3) {
      return 'red';
    } else if (rate < 3.5) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  return (
    <div className={styles.container}>
      {product && <><div className={styles.display}>
        <img src={product.image} alt='' />
        <button onClick={() => add_cart(product)}>Add to Cart</button>
      </div>
      <div className={styles.details}>
        <div className={styles['name_price']}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>₹{product.price}</div>
          <div>
            <span className={styles[ratecolor(product.rating.rate)]}>
              {product.rating.rate}
            </span>
            <span> {product.rating.count} Ratings</span>
          </div>
          <div>Free Delivery</div>
        </div>
        <div className={styles['size']}>
          <div className={styles.title}>Select Size</div>
          <div>Free Size</div>
        </div>
        <div className={styles['description']}>
          <div className={styles.title}>Product Details</div>
          <div>{product.description}</div>
        </div>
      </div>
      </>}
    </div>
  );
}
