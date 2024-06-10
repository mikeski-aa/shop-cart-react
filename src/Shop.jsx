import { useState, useEffect, createContext } from "react";
import { callShopApi } from "./components/ApiFetch";
import { Nav } from "./components/Nav";
import { ShopNav } from "./components/ShopNav";
import { RenderAllItems } from "./components/RenderAllItems";

export const ItemContext = createContext();

export default function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setNewCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [storePage, setStorePage] = useState(1);

  useEffect(() => {
    console.log(items.length);
    console.log("use effect just fired");
    callShopApi().then((response) => setItems(response));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <Nav />
      <ItemContext.Provider
        value={{ items, setItems, cart, setNewCart, storePage, setStorePage }}
      >
        <ShopNav />
        <div className="allItems">
          <RenderAllItems />
        </div>
      </ItemContext.Provider>
    </div>
  );
}
