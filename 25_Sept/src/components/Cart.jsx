import React from "react";
import { useContext } from "react";
import cartContext from "./context";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <>
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item) => (
            <div key={Math.random()} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </>
      ) : (
        <h3>Oops! Add something to the cart</h3>
      )}
    </>
  );
};

export default Cart;
