import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 font-bodyFont">
      {products.map((product) => (
        <div key={product.id} className="rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover mb-2 rounded-md"
          />
          <div className="flex justify-between">
            <div>
              <h3 className="font-light">{product.name}</h3>
              <p className="font-semibold">£{product.price}</p>
              <div className="flex gap-2 mt-1">
                <img src="Rectangle.png" alt="img"></img>
                <span className="text-xs font-light">Josie Parker</span>
              </div>
            </div>
            <div className="pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 border rounded-md p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
