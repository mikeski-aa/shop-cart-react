import { useContext } from "react";
import { ItemContext } from "../Shop";

// function to calculate number of total items in the cart
function calculateTotalNumberOfItems(itemContext) {
  let tempTotal = 0;

  for (let x = 0; x < itemContext.cart.length; x++) {
    tempTotal += itemContext.cart[x].itemQuantity;
  }

  return tempTotal;
}

// navigation bar to allow users to switch categories while in the shop

function ShopNav() {
  const itemContext = useContext(ItemContext);

  const handleAllClick = () => {
    itemContext.setStorePage(1);
  };

  const handleMenClick = () => {
    itemContext.setStorePage(2);
  };

  const handleWomenClick = () => {
    itemContext.setStorePage(3);
  };

  const handleJeweleryClick = () => {
    itemContext.setStorePage(4);
  };

  const handleElectronicsClick = () => {
    itemContext.setStorePage(5);
  };

  const handleCartClick = () => {
    itemContext.setStorePage(6);
  };

  return (
    <div className="shopNav">
      <div className="categoryButtons">
        <button onClick={handleAllClick}>All items</button>
        <button onClick={handleMenClick}>Men's clothing</button>
        <button onClick={handleWomenClick}>Women's clothing</button>
        <button onClick={handleJeweleryClick}>Jewelery</button>
        <button onClick={handleElectronicsClick}>Electronics</button>
      </div>
      <div className="cartBtn">
        <button className="cart" onClick={handleCartClick}>
          Cart ({calculateTotalNumberOfItems(itemContext)})
        </button>
      </div>
    </div>
  );
}

export { ShopNav };
