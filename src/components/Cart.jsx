import { useContext } from "react";
import { ItemContext } from "../Shop";
import { CartItem } from "./CartItem";

// function for displaying current cart
// in currentItems we will map items added to the cart

function Cart() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage != 6) {
    return null;
  }

  console.log("CURRENT CART");
  console.log(itemContext.cart);

  return (
    <div className="currentCart">
      <div className="currentItems">
        {itemContext.cart.map((item) => (
          <CartItem
            key={item.id}
            url={item.image}
            name={item.title}
            quantity={item.itemQuantity}
            subtotal={+item.itemQuantity * +item.price}
          />
        ))}
      </div>
      <div className="totalOrder"></div>
    </div>
  );
}

export { Cart };
