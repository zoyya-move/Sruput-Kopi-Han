document.addEventListener("alpine:init", () => {
  Aplipne.data("products", () => ({
    items: [
      { id: 2, name: "Coffe Corfa", img: "2.jpg", price: 55200 },
      { id: 3, name: "Coffe Pachest", img: "3.jpg", price: 63750 },
      { id: 4, name: "Coffe Top Land", img: "4.jpg", price: 68000 },
      { id: 5, name: "Coffe Blended", img: "5.jpg", price: 51000 },
      { id: 6, name: "Coffe Torava", img: "6.jpg", price: 72250 },
      { id: 7, name: "Coffe Robusta", img: "7.jpg", price: 42500 },
      { id: 8, name: "Coffe Ofeage", img: "8.jpg", price: 59500 },
      { id: 9, name: "Coffe Cocohine", img: "9.jpg", price: 63750 },
      { id: 10, name: "Coffe Blartinighi", img: "10.jpg", price: 76500 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.items);
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
