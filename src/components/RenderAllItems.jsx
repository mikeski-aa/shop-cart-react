import { useContext } from "react";
import { ItemContext } from "../Shop";
import { ItemCard } from "./ItemCard";

// function to render shop cards depending on input
function RenderAllItems() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage != 1) {
    return null;
  }

  return (
    <div className="cards">
      {itemContext.items.map((item) => (
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
  );
}

export { RenderAllItems };
