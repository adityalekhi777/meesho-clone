import React, { useEffect, useState } from 'react';
import styles from './Filter.module.css';
import { db } from '../firebaseConfig';
import { onSnapshot, query, where, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import {productActions,fetchData} from '../redux/products/productReducer';

export default function Filter({ data, filter }) {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState(null);

  const dispatch = useDispatch();

  function checkHandler(e) {
    let val = e.target.value;
    console.log(e.target.value);
  }

  useEffect(() => {
    if (price === null) {
      dispatch(fetchData())
    } else {
      const colRef = collection(db, 'products');
      const q = query(colRef, where('price', '<', price));
      // realtime collection data
      onSnapshot(q, (snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), uui: doc.id });
        });
        dispatch(productActions.get_data({ data, page: 1 }));
      });
    }
  }, [price]);

  function price_change(num) {
    setPrice(num);
  }

  return (
    <div className={styles['filter_container']}>
      <div>Filter by:  <button className={styles.clear} onClick={() => setPrice(null)}>Clear All</button> </div>
      <hr style={{ margin: '10px' }} />
      <div>Price</div>
      <div className={styles.options} onChange={checkHandler}>
        <button
          className={price === 149 ? styles.selected_price : ''}
          onClick={() => price_change(149)}>
          Under ₹149
        </button>
        <button
          className={price === 199 ? styles.selected_price : ''}
          onClick={() => price_change(199)}>
          Under ₹199
        </button>
        <button
          className={price === 249 ? styles.selected_price : ''}
          onClick={() => price_change(249)}>
          Under ₹249
        </button>
        <button
          className={price === 299 ? styles.selected_price : ''}
          onClick={() => price_change(299)}>
          Under ₹299
        </button>
        <button
          className={price === 349 ? styles.selected_price : ''}
          onClick={() => price_change(349)}>
          Under ₹349
        </button>
        <button
          className={price === 399 ? styles.selected_price : ''}
          onClick={() => price_change(399)}>
          Under ₹399
        </button>
        <button
          className={price === 449 ? styles.selected_price : ''}
          onClick={() => price_change(449)}>
          Under ₹449
        </button>
      </div>
    </div>
  );
}
