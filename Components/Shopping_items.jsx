"use client";
import React, { useEffect, useState } from "react";

export default function Shopping_items() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      setData(json.products);

      const uniqueCategories = [...new Set(json.products.map(item => item.category))];
      setCategories(uniqueCategories);
    }
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="p-10 min-h-screen bg-gradient-to-b from-[#EEF1F5] to-[#CBD5E1]">

      {/* ⭐ Heading */}
      <h1 className="
        text-4xl md:text-6xl font-extrabold 
        text-center mb-10 h-[70px] tracking-wide
        bg-gradient-to-r from-[#c83420] via-[#1d528f] to-[#f33fdb]
        text-transparent bg-clip-text
      ">
        Shop by Category
      </h1>

      {/* ⭐ Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">

        {/* All button */}
        <button
          onClick={() => setActiveCategory("all")}
          className={`
            px-6 py-2 rounded-full font-semibold capitalize
            backdrop-blur-xl border
            transition-all duration-300
            ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-[#86A8E7] to-[#91EAE4] text-white shadow-xl scale-110"
                : "bg-white/60 text-gray-800 border-gray-300 hover:bg-white"
            }
          `}
        >
          All Products
        </button>

        {/* All category buttons */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-2 rounded-full font-semibold capitalize
              backdrop-blur-xl border
              transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-white shadow-xl scale-110"
                  : "bg-white/70 text-gray-800 border-gray-300 hover:bg-white"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ⭐ PRODUCTS GRID */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
        gap-10
      "
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="
              bg-white p-5 rounded-2xl shadow-lg 
              hover:shadow-2xl hover:scale-[1.04]
              transition-all duration-300
            "
          >
            {/* Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl"
            />

            {/* Title */}
            <h2 className="text-lg font-bold mt-4 text-[#1F2937]">
              {item.title}
            </h2>

            {/* Category */}
            <p className="text-sm font-semibold text-[#7F7FD5] mt-1 capitalize">
              {item.category}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {item.description}
            </p>

            {/* Price */}
            <p className="font-extrabold text-xl mt-3 text-[#374151]">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
