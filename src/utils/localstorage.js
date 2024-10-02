export const getStoredProducts = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : [];
};

export const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};