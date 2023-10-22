import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from './Cart.module.css';

import {productActions} from '../redux/products/productReducer'

export default function Cart() {
  const cartData = useSelector(state => state.products.items)
  const cartTotal = useSelector(state => state.products.cartTotal)

  const dispatch = useDispatch();

  console.log(cartData)

  return (
    <div className={styles.container}>
      <div className={styles.cart_list}>
        {cartData.map(item =>{
          return (
          <div className={styles.box_outline}>
            <div className={styles.box_container}>
              <img src={item.image} alt="" />
              <div className={styles.content}>
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <p>Qty:{item.quantity}</p>
                <button onClick={() => dispatch(productActions.removeItemFromCart(item.id))}>X Remove</button>
              </div>
            </div>
          </div>)
        })}
      </div>
      <div className={styles.cartpayment}>
        <h3>Price Details:</h3>
        <p>{`Total Product Price:  ₹${cartTotal}`}</p>
        <button>Pay ₹{cartTotal}</button>
      </div>
    </div>
  );
}
