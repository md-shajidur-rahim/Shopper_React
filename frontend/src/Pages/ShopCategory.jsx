import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

// ShopCategory Component
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      {/* Displaying the banner for the shop category */}
      <img className="shopcategory-banner" src={props.banner} alt="" />

      {/* Displaying information about the number of products */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      {/* Rendering the products */}
      <div className="shopcategory-products">
        {/* Mapping over all products and rendering each matching product */}
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null; // Product won't be rendered
          }
        })}
      </div>

      {/* For loading more */}
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;