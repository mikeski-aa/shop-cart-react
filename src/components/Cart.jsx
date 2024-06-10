import { useContext } from "react";
import { ItemContext } from "../Shop";

// function for displaying current cart
// in currentItems we will map items added to the cart

function Cart() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage != 6) {
    return null;
  }

  return (
    <div className="currentCart">
      <div className="currentItems"></div>
      <div className="totalOrder"></div>
    </div>
  );
}

export { Cart };
