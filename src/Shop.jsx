import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { callShopApi } from "./components/ApiFetch";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items.length);
    console.log("use effect just fired");
    callShopApi().then((response) => setItems(response));
  }, []);

  return (
    <div>
      <Link to="/">Back home</Link>
      <ul>
        {" "}
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
