import React from 'react';
import './DescriptionBox.css';

// DescriptionBox Component
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-des">
        <p>Noted: Post on shooting light, different display screens for each person, there will be some slight differences between the picture and the actual product. The size is measured by tiling, due to different measurement methods, if it exists 1-3cm errors are within a reasonable range.</p>
        <p>Please carefully select the specifications and sizes before placing an order. All sizes in this store are standard sizes, place an order according to the size you usually buy.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;