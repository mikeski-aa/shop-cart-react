import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../Shop";
import { CartItem } from "./CartItem";

// function for getting the total value of the cart
function getTotalCartValue(itemContext) {
  let newTotal = 0;
  let newSubtotal = 0;

  for (let x of itemContext.cart) {
    newSubtotal = x.itemQuantity * x.price;
    newTotal += newSubtotal;
  }

  return Math.round(newTotal * 100) / 100;
}

// function for displaying current cart
// in currentItems we will map items added to the cart

function Cart() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage != 6) {
    return null;
  }

  useEffect(() => {}, [itemContext.cart]);

  return (
    <div className="currentCart">
      <div className="currentItems">
        <h2>Your basket</h2>
        {itemContext.cart.map((item) => (
          <CartItem
            key={item.id}
            url={item.image}
            name={item.title}
            quantity={item.itemQuantity}
            subtotal={+item.itemQuantity * +item.price}
            id={item.id}
          />
        ))}
      </div>
      <div className="totalOrder">
        <div className="containerOrderTotal">
          <h2>Order total</h2>
          <div className="totalOrderValue">
            € {getTotalCartValue(itemContext)}
          </div>
          <button className="checkoutBtn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export { Cart };
