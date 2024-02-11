import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { fetchKeyWordData } from '../redux/products/productReducer';
import cart from '../assets/svg/shopping_cart.svg';
import subMenu from './MenuData';

export default function Navbar() {
  const [hover, setHover] = useState(true);
  const [category, setCategory] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [key, setKey] = useState('');
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  console.log(user);

  const navigate = useNavigate();

  function over(e) {
    setHover(true);
    let categoryName = e.target.id;
    setCategory(subMenu[categoryName]);
  }

  function search(e) {
    e.preventDefault();
    dispatch(fetchKeyWordData(key));
    console.log(key);
  }

  return (
    <>
      <nav className={styles.nav} onMouseOver={() => setHover(false)}>
        <ul>
          <li className={styles.logo}>
          <Link to='/' >
            Meesho
            </Link>
            <form onSubmit={search} style={{ display: 'inline' }}>
              <input
                type='text'
                placeholder='search product here'
                value={key}
                onChange={(e) => setKey(e.target.value)}></input>
            </form>
          </li>
          <li onClick={() => navigate('/')}>Home</li>
          {user && <li>Hello {user.email}</li>}
          {!user && (
            <li
              onMouseOver={() => {
                setShowProfile(true);
                setHover(false);
              }}>
              Profile
              {showProfile && (
                <div
                  onMouseOut={() => setShowProfile(false)}
                  className={styles.profile}>
                  Hello User <span>To access your Meesho account</span>
                  <Link to='/signup'>
                    <button className={styles.profile_btn}>Sign Up</button>
                  </Link>
                </div>
              )}
            </li>
          )}
          <li>
            <Link to='/cart' >
              <div className={styles.cartTotal}>{totalQuantity}</div>
            </Link>
          </li>
          <li>
            <Link
              to='/cart'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {' '}
              <img src={cart} alt='cart' /> <span>Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.link}>
        <div className={styles.sub}>
          {Object.keys(subMenu).map((item, index) => (
            <span onMouseOver={(e) => over(e)} key={index} id={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      {hover && (
        <div className={styles.options} onMouseLeave={() => setHover(false)}>
          {category.map((item, index) => {
            return (
              <div
                key={Object.keys(item)[0]}
                className={styles['options-title']}>
                <span>{Object.keys(item)[0]}</span>
                {category[index][Object.keys(item)[0]].map((item) => (
                  <span key={item}>
                    <Link to={`/category/${item.replaceAll(' ', '')}`}>
                      {item}
                    </Link>
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
