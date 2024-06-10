import React, { useContext } from 'react';

//Importing necessary dependencies
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';

//Importing necessary components
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

// Product Component
const Product = () => {

  {/* ShopContext extracts all of the products */}
  const {all_product} = useContext(ShopContext);

  {/* useParams extracts the productId from the URL */}
  const {productId} = useParams();

  {/*The find method matches the id of each product with the productId extracted from the URL*/}
  {/* The found product is stored in the product variable */}
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      {/* Both Passes the product as prop */}
      <Breadcrum product = {product} />
      <ProductDisplay product = {product} />

      {/* Renders to display additional information about the product */}
      <DescriptionBox />

      {/* Renders to display related products */}
      <RelatedProducts />
    </div>
  )
}

export default Product;