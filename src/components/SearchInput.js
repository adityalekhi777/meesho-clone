import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeyWordData } from "../redux/products/productReducer";

import styles from "./SearchInput.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [key, setKey] = useState("");
  const [matches, setMatches] = useState([]);
  const [productList, setProductList] = useState([]);
  const data = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      let list = data.map((item) => {
        return {
          title: item.title,
          id: item.uui,
        };
      });
      setProductList(list);
    }
  }, [data]);

  function searchProducts(text) {
    setKey(text);
    const regex = new RegExp(`^${text}`, "gi");
    let matches = productList.filter((item) => {
      return item.title.match(regex);
    });
    text.length > 0 ? setMatches(matches) : setMatches([]);
  }

  function search(e) {
    e.preventDefault();
    dispatch(fetchKeyWordData(key));
    console.log(key);
  }

  function navigateToProduct(id){
    setKey("");
    setMatches([]);
    navigate(`/product/${id}`)
  }

  return (
    <form onSubmit={search} className={styles.searchForm}>
      <input
        type="text"
        placeholder="search product here"
        value={key}
        onChange={(e) => searchProducts(e.target.value)}
      ></input>
      {matches.length > 0 && (
        <div className={styles.matchList}>
          <ul>
            {matches.map((item, idx) => {
              return (
                <div key={idx}>
                  <li onClick={()=> navigateToProduct(item.id)}>{item.title.slice(0, 20) + "..."}</li>
                  <hr></hr>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </form>
  );
}
