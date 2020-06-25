import React from "react";

const ProductItem = (props) => {
  const { id, name, image, price, inventory, category } = props.info;

  return (
    <div className="product" key={id}>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="product-name">{name}</h3>
      <h5 className="product-price">{price}</h5>
      <div className="product-action">
        <button disabled={inventory === 0}>
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
