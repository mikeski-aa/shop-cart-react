import { useContext } from "react";
import { ItemContext } from "../Shop";
import "../styles/ShopNav.css";

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

  const getClassActive = () => {
    if (itemContext.storePage === 1) {
      return "activeOne";
    } else if (itemContext.storePage === 2) {
      return "activeTwo";
    } else if (itemContext.storePage === 3) {
      return "activeThree";
    } else if (itemContext.storePage === 4) {
      return "activeFour";
    } else if (itemContext.storePage === 5) {
      return "activeFive";
    } else if (itemContext.storePage === 6) {
      return "activeSix";
    }
  };

  return (
    <div className="shopNav">
      <div className="categoryButtons">
        <button
          onClick={handleAllClick}
          className={`allItems ${getClassActive()}`}
        >
          All items
        </button>
        <button
          onClick={handleMenClick}
          className={`mensClothing ${getClassActive()}`}
        >
          Men's clothing
        </button>
        <button
          onClick={handleWomenClick}
          className={`womensClothing ${getClassActive()}`}
        >
          Women's clothing
        </button>
        <button
          onClick={handleJeweleryClick}
          className={`jewelery ${getClassActive()}`}
        >
          Jewelery
        </button>
        <button
          onClick={handleElectronicsClick}
          className={`electronics ${getClassActive()}`}
        >
          Electronics
        </button>
      </div>
      <div className="cartBtn">
        <button
          className={`cart ${getClassActive()}`}
          onClick={handleCartClick}
        >
          Cart ({calculateTotalNumberOfItems(itemContext)})
        </button>
      </div>
    </div>
  );
}

export { ShopNav };
