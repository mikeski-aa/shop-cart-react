import { useContext } from "react";
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

  Math.round(newTotal * 100) / 100;

  return newTotal;
}

// function for displaying current cart
// in currentItems we will map items added to the cart

function Cart() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage != 6) {
    return null;
  }

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
        <h2>Order total</h2>
        <div className="totalOrderValue">{getTotalCartValue(itemContext)}</div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export { Cart };
