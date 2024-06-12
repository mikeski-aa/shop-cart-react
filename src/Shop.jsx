import { useState, useEffect, createContext } from "react";
import { callShopApi } from "./components/ApiFetch";
import { Nav } from "./components/Nav";
import { ShopNav } from "./components/ShopNav";
import { RenderAllItems } from "./components/RenderAllItems";
import { Cart } from "./components/Cart";
import {
  getSessionStorageData,
  setSessionStorageData,
} from "./components/sessionStorage";
import "../src/styles/Shop.css";

export const ItemContext = createContext();

export default function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setNewCart] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [storePage, setStorePage] = useState(1);

  useEffect(() => {
    console.log("Shop.jsx is mounting");
    callShopApi()
      .then((response) => setItems(response))
      .finally(setShowSpinner(false));

    return () => {
      console.log("Shop is being unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(showSpinner);
    return () => {};
  }, [showSpinner]);

  if (showSpinner == true) {
    return (
      <div className="shopContainer">
        <div className="containerRandom">
          <h1>Shop</h1>
          <Nav />
        </div>
        <ItemContext.Provider
          value={{ items, setItems, cart, setNewCart, storePage, setStorePage }}
        >
          <div className="containerForShop">
            <ShopNav />
            <div className="allItems">
              <h1>Loading Data</h1>
            </div>
          </div>
        </ItemContext.Provider>
      </div>
    );
  }

  return (
    <div className="shopContainer">
      <div className="containerRandom">
        <h1>Shop</h1>
        <Nav />
      </div>

      <ItemContext.Provider
        value={{ items, setItems, cart, setNewCart, storePage, setStorePage }}
      >
        <div className="containerForShop">
          <ShopNav />
          <div className="allItems">
            <RenderAllItems />
            <Cart />
          </div>
        </div>
      </ItemContext.Provider>
    </div>
  );
}
