import React from 'react';
import { useParams } from 'react-router-dom';

import Styles from './Category.module.css'


// const arr = [{
//   "id": 22,
//   "title": "Saree",
//   "price": 208,
//   "description": "Designer Lycra Saree With Blouse, Dupion Silk,Alluring Sarees , Solid Bollywood Silk Blend Saree ,Embellished Fashion Lycra Blend Saree",
//   "category": "All Sarees",
//   "image": "https://images.meesho.com/images/products/87179016/0gavu_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 23,
//   "title": "Saree",
//   "price": 548,
//   "description": "Jhamdhani Cotton Silk Blue Saree with Running Blouse,Cotton Silk",
//   "category": "cotton silk sarees",
//   "image": "https://images.meesho.com/images/products/1009459/1_512.webp",
//   "rating": {
//     "rate": 3.0,
//     "count": 120
//   }},{
//   "id": 24,
//   "title": "Anarkali",
//   "price": 356,
//   "description": "women, men and children. Customers can expect a world-class shopping environment stocking the latest in international fashion from around the globe, as well as OM SAI LATEST CREATION's own label of in-house designs in carefully chosen colour palettes. Pioneering the concept of ‘Latest fashion at great prices’ in India",
//   "category": "anarkali women kurtis",
//   "image": "https://images.meesho.com/images/products/314478409/8pflw_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 25,
//   "title": "top and tuincs",
//   "price": 214,
//   "description": "Designer top for women and girls. fabric is fox georgette .this fabric feeling is soft and lower part of top is transparent.",
//   "category": "Tops",
//   "image": "https://images.meesho.com/images/products/295305292/1ks7t_512.webp",
//   "rating": {
//     "rate": 3.5,
//     "count": 120
//   }},{
//   "id": 26,
//   "title": "",
//   "price": 109.95,
//   "description": "",
//   "category": "",
//   "image": "",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 27,
//   "title": "SILKY HIGH WAIST BLACK",
//   "price": 347,
//   "description": "TRENDY SILKY HIGH WAIST JEANS.LOOKS COOL AND COMFTY.",
//   "category": "Jeans",
//   "image": "https://images.meesho.com/images/products/305664601/kig5i_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 28,
//   "title": "",
//   "price": 109.95,
//   "description": "",
//   "category": "",
//   "image": "",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 29,
//   "title": "MEN'S SOLID FULL SLEEVE T SHIRT COMBO (PACK OF 3 PCS)",
//   "price": 341,
//   "description": "style regular,neck style round neck,pattern solid,sleeve full sleeve,fabric nylon",
//   "category": "Tshirts",
//   "image": "https://images.meesho.com/images/products/330164027/cjuvj_512.webp",
//   "rating": {
//     "rate": 4.1,
//     "count": 120
//   }},{
//   "id": 30,
//   "title": "LIMESTONE Trendy Men Watches",
//   "price": 268,
//   "description": "Good Quality Japanese Battery Powered watch.",
//   "category": "Watches",
//   "image": "https://images.meesho.com/images/products/41037066/xbezz_512.webp",
//   "rating": {
//     "rate": 4.1,
//     "count": 120
//   }},{
//   "id": 31,
//   "title": "Belt",
//   "price": 135,
//   "description": "Black and brown belt combo by HAIKO",
//   "category": "Belt",
//   "image": "https://images.meesho.com/images/products/142895578/pdxup_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 32,
//   "title": "",
//   "price": 109.95,
//   "description": "",
//   "category": "",
//   "image": "",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 33,
//   "title": "TRENDING LATEST STYLISH SHOE FOR MEN  ",
//   "price": 329,
//   "description": "These shoes are comfortable while walking and very lightweight and durable. Smarten up your look by wearing this Casual Shoes for Boys and Men. Featuring a Trendy Designe. The shoe looks good and the quality is also good. and this shoe in uses on zym , walking ,running & daily uses shoe . new brand for ontour shoes.",
//   "category": "Casual Shoes",
//   "image": "https://images.meesho.com/images/products/204037995/pkjsk_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 34,
//   "title": "bedsheets",
//   "price": 372.95,
//   "description": "Bedsheet Size - 78 inch x 72 inch + 6 inch (Drop) Pillow Cover - 18 inch x 28 inch or 46 cm x 68 cm SuperSoft Premium Brushed Glace Cotton bedsheet, Breathable & Wrinkle Free Large size to make it easy to tuck-in below the bed, Light Weight and easy to wash at home. Pack Contents – 1 Fitted Double Bedsheet with 2 pillow",
//   "category": "bedsheets",
//   "image": "https://images.meesho.com/images/products/336129685/wqwpi_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 35,
//   "title": "Bag",
//   "price": 109.95,
//   "description": "Item will be ship out the following day! High Quality Guarantee!! “We double check the products before Ready Take note : If you order on sat we can only ship out on Mondays as Jnt doesn't work on Sunday. First photo is LOOKMUSTER upgraded Features Upgraded Has better stitching as well as better material used! This Backpack is waterproof 100% IF you close your bag properly! Has tons of hidden compartment as well as a compartment for your laptop! Highly recommended! Backpack is",
//   "category": "Bags",
//   "image": "https://images.meesho.com/images/products/351898645/i7nqa_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 36,
//   "title": "WALLET FOR MENS",
//   "price": 109.95,
//   "description": "RFID debit/credit cards let you make payments just by touching the card to a scanner rather than swiping across or inserting into a terminal. Currently, as most of the contactless cards are designed for convenience, it also attracts risk. RFID blocker is a material that interferes with radio waves to negate the risk. This RFID blocking",
//   "category": "Wallets",
//   "image": "https://images.meesho.com/images/products/351831555/ua5hn_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }},{
//   "id": 37,
//   "title": "Black & Gold Metal Frameless Rectangle Leopard Arms Colored Lens Sun Glasses",
//   "price": 219,
//   "description": "Mc Stan Rimless Sunglasses For Men and Womens Retro Luxury Gold Metal Frameless Rectangle Leopard Arms Colored Lens Sun",
//   "category": "Sunglasses",
//   "image": "https://images.meesho.com/images/products/308768594/qt6id_512.webp",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   },
// }]

export default function Category() {
  const { name } = useParams();

  return (
    <div className={Styles.container}>
      <p>Limited Data Available for : {name}</p>
      <p>Please select another category</p>
    </div>
  );

}

