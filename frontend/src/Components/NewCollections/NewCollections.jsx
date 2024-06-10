import React, { useEffect, useState } from 'react';
import './NewCollections.css';
// import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

// Component NewCollections
const NewCollections = () => {

  // Contains the new collections fetched from the server
  const [new_collection, setNew_collection] = useState([]);

  // To fetch new collections when the component mounts 
  // The fetched data is then stored in the newcollections state
  useEffect(() => {
    fetch('/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_collection(data));
  },[])

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      {/* Mapping through data to render each item */}
      <div className="collections">
        {new_collection.map((item,i)=> {
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;