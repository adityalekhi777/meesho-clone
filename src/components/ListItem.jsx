import React from 'react'
import {useNavigate} from 'react-router-dom'

import styles from './ListItem.module.css';

function ratecolor(rate) {
    if (rate < 3) {
      return 'red';
    } else if (rate < 3.5) {
      return 'orange';
    } else {
      return 'green';
    }
  }

export default function ListItem({item}) {
    const navigate = useNavigate();
    return (
        <div
          className={styles['product_grid_item']}
          onClick={() => navigate(`/product/${item.uui}`)}>
          <img src={item.image} alt='' />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.price}>
            <span>₹{item.price}</span> onwards
          </div>
          <div>Free Delivery</div>
          <span className={styles[ratecolor(item.rating.rate)]}>
            {item.rating.rate}{' '}
          </span>
          <span>{item.rating.count}</span>
        </div>
      );
}
