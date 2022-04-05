import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Menu = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const recipes = async () => {
      try {
        const data = await axios.get(
          "https://studiographene-exercise-api.herokuapp.com/foods"
        );
        let map = new Map();
        for (let d of data.data) {
          const mVal = await map.get(d.type);
          map.set(d.type, mVal == null ? [d] : [...mVal, d]);
        }
        console.log(map);
        setFetchedData(map);
      } catch (error) {
        console.log(error);
      }
    };
    recipes();
  }, []);

  const items = [];

  for (const [key, value] of fetchedData) {
    items.push(
      <div>
        <h1>{key.toUpperCase().split("_").join(" ")}</h1>
        {value.map((v) => (
          <>
            <ul>{v.title}</ul>
            <ul>{v.description}</ul>
            <ul>{v.price}</ul>
          </>
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className='our-menu'>Our Menu</h1>
      <div className='section' id='menu'>
        {items}
      </div>
    </>
  );
};

export default Menu;
