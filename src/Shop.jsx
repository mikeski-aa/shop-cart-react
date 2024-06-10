import { Link } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { callShopApi } from "./components/ApiFetch";
import { Nav } from "./components/Nav";
import { ItemCard } from "./components/ItemCard";

export const ItemContext = createContext();

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items.length);
    console.log("use effect just fired");
    callShopApi().then((response) => setItems(response));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <Nav />
      <div className="allItems">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            rating={item.rating.rate}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
