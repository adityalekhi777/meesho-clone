import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../redux/products/productReducer';
import { useSelector } from 'react-redux';
import { fetchData } from '../redux/products/productReducer';
import styles from './List.module.css';
import Filter from '../components/Filter';
import { useNavigate } from 'react-router-dom';
import Swiper from 'swiper';
import Slider from '../components/Slider';

function List() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const [usedData, setUsedData] = useState('');

  const navigate = useNavigate();

  console.log(usedData);

  function filterData(data) {
    setUsedData(data);
  }

  useEffect(() => {
    setUsedData(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

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
    <>
    <Slider/>
    <div className={styles.container}>
      
      <div className={styles.filter}>
        <Filter data={data} filter={filterData} />
      </div>
      <div className={styles['product_grid_container']}>
        {usedData &&
          usedData.map((item) => {
            return (
              <div
                key={item.uui}
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
          })}
        <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      </div>
    </div>
    </>
  );
}

export default List;
