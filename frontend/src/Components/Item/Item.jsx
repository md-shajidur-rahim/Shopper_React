import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      {/* Link to the product page using template literal technique*/}
      <Link to={`/product/${props.id}`}>
        {/* Image of the item */}
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>

      {/* Name of the item */}
      <p>{props.name}</p>
      {/* Prices of the item */}
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item