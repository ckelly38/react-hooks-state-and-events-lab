import React, { useState } from "react";

function Item({ name, category }) {
  let [isOnCart, setIsOnCart] = useState(false);

  function handleAddToRemoveFromCartListener(event)
  {
    event.target.parentNode.className = (isOnCart ? "" : "in-cart");
    setIsOnCart((myoncart) => !myoncart);
  }

  return (
    <li className={isOnCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToRemoveFromCartListener}>
        {(!isOnCart) ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
