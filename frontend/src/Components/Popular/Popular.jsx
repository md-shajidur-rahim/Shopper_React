import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item';

// Component Popular
const Popular = () => {

  // Contains the popular products fetched from the server
  const [popularProducts, setPopularProducts] = useState([]);

  // To fetch popular products when the component mounts 
  // The fetched data is then stored in the popularProducts state
  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      {/* For rendering popular items fetched from the server */}
      <div className="popular-item">
        {popularProducts.map((item, i) => { 
          return (
            // To render each item's details
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;