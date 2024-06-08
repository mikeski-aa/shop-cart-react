// this function will be responsible for fetching cart items and images from the free shop api provided
// this should be stored in an object so that we don't have to call the API every time shop is clicked
// i guess caching it?

import { useEffect } from "react";

async function callShopApi() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const jsonFile = await response.json();
      return jsonFile;
    }
  } catch (error) {
    alert("Oops something went wrong!");
    return error;
  }
}

function getCallResults(setstate) {
  callShopApi().then((result) => {
    useEffect(() => {
      setstate(result);
    }, [result]);
  });
}

export { callShopApi, getCallResults };
