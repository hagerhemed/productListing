import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const categories = ["Electronics", "Books", "Clothing", "Sports"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newProduct.name ||
      !newProduct.price ||
      isNaN(newProduct.price) ||
      !newProduct.image
    ) {
      alert("Please provide valid product details.");
      return;
    }
    onAddProduct({ ...newProduct, id: Date.now() });
    setNewProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-8 border rounded-lg mx-auto w-full max-w-2xl"
    >
      <h2 className="mb-6 font-medium text-3xl">Sell an item</h2>

      <label className="block mb-2">Upload photos</label>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="border mb-6 w-full p-14 focus:outline-none file:mr-4 file:py-2 file:px-4 file:border-seconaryColor file:bg-white"
      />

      <label className="block">Title</label>
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        className="border p-2 mb-4 w-full focus:outline-none rounded"
        required
      />

      <label className="block">Describe your item</label>
      <textarea
        name="description"
        value={newProduct.description}
        onChange={handleChange}
        className="border p-10 mb-4 w-full focus:outline-none rounded"
      />

      <label className="block">Category</label>
      <select
        name="category"
        value={newProduct.category}
        onChange={handleChange}
        className="border p-2 mb-4 w-full focus:outline-none rounded text-gray-400"
        required
      >
        <option value="">Select</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label className="block">Item price</label>
      <input
        type="number"
        name="price"
        placeholder="£"
        value={newProduct.price}
        onChange={handleChange}
        className="border p-2 mb-4 w-full focus:outline-none rounded"
        required
      />

      <button type="submit" className="bg-seconaryColor w-full p-3 rounded">
        Upload item
      </button>
    </form>
  );
};

export default AddProductForm;
