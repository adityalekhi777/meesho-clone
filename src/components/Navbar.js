import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { fetchKeyWordData } from '../redux/products/productReducer';
import cart from '../assets/svg/shopping_cart.svg';

const subMenu = {
  'Women Ethnic': [
    { 'All Women Ethnic': ['View All'] },
    {
      Sarees: [
        'All Sarees',
        'Silk Sarees',
        'Cotton Silk Sarees',
        'Cotton Sarees',
        'Georgette Sarees',
        'Chiffon Sarees',
        'Satin Sarees',
        'Embroidered Sarees',
      ],
    },
    {
      Kurtis: [
        'All Kurtis',
        'Anarkali Kurtis',
        'Rayon Kurtis',
        'Cotton Kurtis',
        'Embroidered Kurtis',
      ],
    },
    { 'Kurta Sets': ['All Kurta Sets'] },
    {
      'Suits & Dress Material': [
        'All Suits & Dress Material',
        'Cotton Suits',
        'Embroidered Suits',
        'Chanderi Suits',
      ],
    },
    {
      'Other Ethnic': [
        'Blouses',
        'Dupattas',
        'Lehanga',
        'Gown',
        'Ethnic Bottomwear',
      ],
    },
  ],
  'Women Western': [
    { Topwear: ['Tops', 'Dresses', 'Sweaters', 'Jumpsuits'] },
    { Bottomwear: ['Jeans', 'Jeggings', 'Palazzos', 'Shorts', 'Skirts'] },
    { Innerwear: ['Bra', 'Briefs'] },
    { Sleepwear: ['Nightsuits', 'Babydolls'] },
  ],
  Men: [
    { 'Top Wear': ['All Top Wear', 'Tshirts', 'Shirts'] },
    { 'Bottom Wear': ['Jeans', 'Trousers', 'Track Pants'] },
    {
      'Men Accessories': [
        'All Men Accessories',
        'Watches',
        'Belts',
        'Wallets',
        'Jewellery',
        'Sunglasses',
        'Bags',
      ],
    },
    {
      'Men Footwear': [
        'Casual Shoes',
        'Sports Shoes',
        'Sandals',
        'Formal Shoes',
      ],
    },
    { 'Ethnic Wear': ['Men Kurtas', 'Ethnic Jackets'] },
    { 'Inner & Sleep Wear': ['All Inner & Sleep Wear', 'Vests'] },
  ],
  Kids: [
    { 'Boys & Girls 2+ Years': ['Dresses'] },
    { 'Infant 0-2 Years': ['Rompers'] },
    {
      'Toys & Accessories': [
        'Soft Toys',
        'Footwear',
        'Stationery',
        'Watches',
        'Bags & Backpacks',
      ],
    },
    { 'Baby Care': ['All Baby Care'] },
  ],
  'Home & Kitchen': [
    {
      'Home Furnishing': [
        'Bedsheets',
        'Doormats',
        'Curtains & Sheers',
        'Cushions & Cushion Covers',
        'Mattress Protectors',
      ],
    },
    { 'Home Decor': ['All Home Decor', 'Stickers', 'Clocks', 'Showpieces'] },
    { 'Kitchen & Dining': ['Kitchen Storage', 'Cookware & Bakeware'] },
  ],
  'Beauty & Health': [
    { 'Make up': ['Face', 'Eyes', 'Lips', 'Nails'] },
    { Wellness: ['Sanitizers', 'Oral Care', 'Feminine Hygiene'] },
    { Skincare: ['Deodorants'] },
  ],
  'Jewellery & Accessories': [
    {
      Jewellery: [
        'Jewellery Set',
        'Earrings',
        'Mangalsutras',
        'Studs',
        'Bangles',
        'Necklaces',
        'Rings',
        'Anklets',
      ],
    },
    {
      'Women Accessory': [
        'Bags',
        'Watches',
        'Hair Accessories',
        'Sunglasses',
        'Socks',
      ],
    },
  ],
  'Bags & Footwear': [
    { 'Women Bags': ['All Women Bags', 'Handbags', 'Clutches', 'Slingbags'] },
    { 'Men Bags': ['All Men Bags', 'Men Wallets', ''] },
    {
      'Men Footwear': [
        'Sports Shoes',
        'Casual Shoes',
        'Formal Shoes',
        'Sandals',
      ],
    },
    { 'Women Footwear': ['Flats', 'Bellies', 'Juttis'] },
  ],
  Electronics: [
    {
      'Mobile & Accessories': [
        'All Mobile & Accessories',
        'Smartwatches',
        'Mobile Holders',
        'Mobile cases and covers',
      ],
    },
    { Appliances: ['All Appliances', 'Grooming', 'Home Appliances'] },
  ],
};

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
            Meesho
            <form onSubmit={search} style={{ display: 'inline' }}>
              <input
                type='text'
                placeholder='search product here'
                value={key}
                onChange={(e) => setKey(e.target.value)}></input>
            </form>
            
          </li>
          <li onClick={()=> navigate('/')}>Home</li>
          {user && <li>Hello {user.email}</li>}
          <li>Download App</li>
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
            <Link
              to='/cart'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {' '}
              <div
                style={{
                  backgroundColor: 'pink',
                  textAlign:'center',
                  display:'block',
                  height: '30px',
                  width: '30px',
                  lineHeight:'30px',
                  borderRadius: '20px',
                  alignSelf:'center',
                  justifySelf:'center'
                }}>
                {totalQuantity}
              </div>
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
