import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const { title, price, id, image, rating, hideButton } = props;
  const [, dispatch] = useStateValue();

 // console.log(props);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {/* create an array, llenala con el valor de rating, y recorrela */}
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>
                <span role="img" aria-label="">
                  ⭐
                </span>
              </p>
            ))}
        </div>
        {!hideButton && (
         <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
