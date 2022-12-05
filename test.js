const cart = [
  { items: "Nivea Lip Balm", qty: 5, subtotal: 3500, interest: true },
  { items: "Nivea Face Cream", qty: 3, subtotal: 5400, interest: true },
  { totalPrice: 8900 },
].map((a) => {
  return {
    items: a.items,
    Qty: a.qty,
    Subtotal: a.subtotal,
    TotalPrice: a.totalPrice,
  };
});

console.log(cart);
