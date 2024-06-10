import React, { createContext, useEffect, useState } from 'react';

// Creating a new context named ShopContext using createContext
// To manage state related to shopping items and cart management across components
export const ShopContext = createContext(null);

//  To set the initial state of the cart items
const getDefaultCart = () => {
  // Generates a default cart object with each item initialized to 0
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) { //all_product.length
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {

  // To initialize state variables
  const [all_product, setAll_Product] = useState([]);

  // To manage cart items
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // To fetch and contain all products from the server
  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data))

      if (localStorage.getItem('auth-token')) {
        fetch('http://localhost:4000/getcart', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: "",
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
  }, []);

  // addToCart function manage adding items from the cart by updating the cartItems state
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log(cartItems);
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId":itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // removeFromCart function removing items from the cart by updating the cartItems state
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId":itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // To Calculate the total amount of items in the cart based on the quantity and price 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;
    }
  };

  // To calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
      return totalItem;
    }
  };

  // Create contextValue containing all the functions, state, and data needed for managing the shopping cart
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  
  // To enable child components to access the context and use the provided state and functions
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;