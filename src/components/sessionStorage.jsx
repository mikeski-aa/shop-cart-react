// function here will handle all sessionStorage operations
// using sessionStorage over localstorage as I do not want shop data to save between browser close,
// but instead only when switching between shop and main page urls

function setSessionStorageData(key, dataToStore) {
  console.log("data stored");
  console.log(dataToStore);
  let toString = JSON.stringify(dataToStore);
  sessionStorage.setItem(key, toString);
  console.log(toString);
}

function getSessionStorageData(key) {
  let x = sessionStorage.getItem(key);
  let retrieved = JSON.parse(x);
  console.log("data retrieved");
  console.log(retrieved);
  return retrieved;
}

export { setSessionStorageData, getSessionStorageData };
