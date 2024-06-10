import { useContext } from "react";
import { ItemContext } from "../Shop";
import { ItemCard } from "./ItemCard";

// this is a kind of sketchy way of doing it, as it trusts all categories are correctly labelled
function filterItems(itemContext, target) {
  let tempArray = [...itemContext.items];
  let filteredArray = tempArray.filter((item) => item.category == target);

  return filteredArray;
}

function renderHelper(itemContext) {
  if (itemContext.storePage == 1) {
    return itemContext.items;
  } else if (itemContext.storePage == 2) {
    return filterItems(itemContext, "men's clothing");
  } else if (itemContext.storePage == 3) {
    return filterItems(itemContext, "women's clothing");
  } else if (itemContext.storePage == 4) {
    return filterItems(itemContext, "jewelery");
  } else if (itemContext.storePage == 5) {
    return filterItems(itemContext, "electronics");
  } else return [1];
}

// function to render shop cards depending on input
function RenderAllItems() {
  const itemContext = useContext(ItemContext);

  if (itemContext.storePage === 6) {
    return null;
  }

  return (
    <div className="cards">
      {renderHelper(itemContext).map((item) => (
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

export { RenderAllItems, filterItems, renderHelper };
