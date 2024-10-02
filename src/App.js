import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import AddProductForm from "./Components/ProductForm";
import {getStoredProducts,saveProductsToLocalStorage,} from "./utils/localstorage";
import { filterProducts, sortProducts } from "./utils/productUtils";
import { paginateProducts, totalPages } from "./utils/paginationUtils";


const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const storedProducts = getStoredProducts();
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    }
  }, []);

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  const filteredProducts = filterProducts(products, searchTerm);
  const sortedProducts = sortProducts(filteredProducts, sortOrder);
  const total = totalPages(sortedProducts.length, itemsPerPage);
  const paginatedProducts = paginateProducts(
    sortedProducts,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="container mx-auto p-4 font-bodyFont mt-10">
      <AddProductForm onAddProduct={handleAddProduct} />

      {/* Search*/}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-20">
        <div className="flex items-center border rounded-md mb-4 pr-2 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="border-hidden p-2 font-normal focus:outline-none w-80"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-1 cursor-pointer"
            onClick={() => {}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Sort */}
        <div className="flex items-center">
          <span className="mr-2 font-light">Sort by</span>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded-md focus:outline-none mr-2"
          >
            <option value="name-asc">(A-Z)</option>
            <option value="name-desc">(Z-A)</option>
            <option value="price-asc">Price: (Low to High)</option>
            <option value="price-desc">Price: (High to Low)</option>
          </select>
          <button className="bg-seconaryColor p-2 rounded-md font-light">
            + Sell Item
          </button>
        </div>
      </div>

      {/* Product List */}
      <ProductList products={paginatedProducts} />

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between mt-16 ">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`rounded-md flex items-center gap-2 p-2 md:p-3 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Previous
        </button>

        <div className="flex flex-wrap justify-center my-2 md:my-0">
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mr-2 pr-4 pl-4 pt-2 pb-2 ${
                currentPage === index + 1
                  ? "border border-seconaryColor"
                  : "border-0"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, total))}
          disabled={currentPage === total}
          className={`rounded-md flex items-center gap-2 p-2 md:p-3 ${
            currentPage === total ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
