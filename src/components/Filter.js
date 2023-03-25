import React, { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter({ data, filter }) {
  const [value, setValue] = useState("");

  function checkHandler(e) {
    let val = e.target.value;
    setValue(val);
    let newData = data.filter((item) => item.price <= val);
    filter(newData);
  }

  return (
    <div className={styles["filter_container"]}>
      <div>Filter by </div>
      <div>Price</div>
      <div className={styles.options} onChange={checkHandler}>
        <label>
          Under ₹149
          <input name="price" type="radio" value={"149"} />
        </label>
        <label>
          Under ₹199
          <input name="price" type="radio" value={"199"} />
        </label>
        <label>
          Under ₹249
          <input name="price" type="radio" value={"249"} />
        </label>
        <label>
          Under ₹299
          <input name="price" type="radio" value={"299"} />
        </label>
        <label>
          Under ₹349
          <input name="price" type="radio" value={"349"} />
        </label>
        <label>
          Under ₹399
          <input name="price" type="radio" value={"399"} />
        </label>
        <label>
          Under ₹449
          <input name="price" type="radio" value={"449"} />
        </label>
      </div>
    </div>
  );
}
