import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

// RelatedProducts Component
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        {/* For visual seperation */}
        <hr />
        
        <div className="relatedproducts-item">
          {/* The map function maps through the data_product */}
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>      
    </div>
  )
}

export default RelatedProducts