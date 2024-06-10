import { useContext } from "react";
import { ItemContext } from "../Shop";

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

  return (
    <div className="shopNav">
      <button onClick={handleAllClick}>All items</button>
      <button onClick={handleMenClick}>Men's clothing</button>
      <button onClick={handleWomenClick}>Women's clothing</button>
      <button onClick={handleJeweleryClick}>Jewelery</button>
      <button onClick={handleElectronicsClick}>Electronics</button>
    </div>
  );
}

export { ShopNav };
