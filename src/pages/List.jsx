import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/products/productReducer';
import styles from './List.module.css';
import Filter from '../components/Filter';
import Slider from '../components/Slider';
import ListItem from '../components/ListItem';

import { Spinner } from '@chakra-ui/react';

function List() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const [usedData, setUsedData] = useState('');

  console.log(usedData);

  function filterData(data) {
    setUsedData(data);
  }

  useEffect(() => {
    if (page > 0 && page < 4 && data !== null && data.length > 0) {
      const startIndex = (page - 1) * 16;
      const endIndex = startIndex + 16;
      setUsedData(data.slice(startIndex, endIndex));
    }
  }, [data, page]);

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  return (
    <>
      <Slider />
      <div className={styles.container}>
        <div className={styles.filter}>
          <Filter data={data} filter={filterData} />
        </div>

        {true && (
          <div className={styles['product_grid_container']}>
            {!data && (
              <div className={styles.spinner}>
                <Spinner as='div' size='xl' thickness='4px' color='pink.500' />
              </div>
            )}
            {usedData &&
              usedData.map((item) => <ListItem key={item.uui} item={item} />)}
            <div id='pagination' className={styles.pagination}>
              <button onClick={() => setPage((prev) => prev - 1)}>
                Prev Page
              </button>
              <button onClick={() => setPage((prev) => prev + 1)}>
                Next Page
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default List;
