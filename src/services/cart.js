
async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  console.log("\nShopping Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}
export { addItem, calculateTotal, deleteItem, removeItem, displaycart };