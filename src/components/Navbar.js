import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import cart from "../assets/svg/shopping_cart.svg";
import SideBar from "./SideBar";
import subMenu from "./MenuData";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [hover, setHover] = useState(true);
  const [category, setCategory] = useState([]);
  // const [showProfile, setShowProfile] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  console.log(user);

  // const navigate = useNavigate();

  function over(e) {
    setHover(true);
    let categoryName = e.target.id;
    setCategory(subMenu[categoryName]);
  }

  return (
    <>
      <nav className={styles.nav} onMouseOver={() => setHover(false)}>
        <ul>
          <li className={styles.SideBar}>
            <SideBar />
          </li>
          <li className={styles.logo}>
            <Link to="/">Meesho</Link>
          </li>
          <li className={styles.input}>
            <SearchInput />
          </li>
          {user && <li>Hello {user.email}</li>}
          <li className={styles.cart}>
            <Link to="/cart">
              <div className={styles.cartTotal}>{totalQuantity}</div>
            </Link>
            <Link
              to="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <img src={cart} alt="cart" /> <span>Cart</span>
            </Link>
          </li>
          <li></li>
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
                className={styles["options-title"]}
              >
                <span>{Object.keys(item)[0]}</span>
                {category[index][Object.keys(item)[0]].map((item) => (
                  <span key={item}>
                    <Link to={`/category/${item.replaceAll(" ", "")}`}>
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
