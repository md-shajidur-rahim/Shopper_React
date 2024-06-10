import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

// ProductDisplay Component
const ProductDisplay = (props) => {

    {/* ProductDisplay extracts all of the products */}
    const {product} = props;
    
    { /* ShopContext function is used to add the current product to the shopping cart */}
    const {addToCart} = useContext(ShopContext);
    
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">

        { /* Displays a list of product images as boxes*/}
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>

        { /* Displays a main product image */}
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      { /* Displays the details of the product */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        { /* The star rating of the product */}
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            { /* The number of the users rated the product */}
            <p>(122)</p>
        </div>

        { /* The prices (old and new) of the product */}
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>

        { /* Delivery address of the product */}
        <div className="productdisplay-right-delivery">
            <span>Delivery: </span>43/21 Sabujkanon, Dhaka-1214
        </div>

        { /* Delivery address of the product */}
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        
        { /* Button for adding the product to the shopping cart */}
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Product Details: </span>Basic Style: Youth popularity, Clothing style: Standard, Fabric Material: Nylon,Spandex</p>
      </div>
    </div>
  )
}

export default ProductDisplay