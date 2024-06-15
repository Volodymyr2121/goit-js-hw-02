function checkStorage(storage, item) {
  const itemUpper = item.toLowerCase();
  if (storage.includes(itemUpper)){
    return `${itemUpper} is avaible to order!`;
  }else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "plum"))