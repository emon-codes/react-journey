import React, { useState } from "react";
import useData from "../Hooks/useData";

const SectionHeading = ({
  heading,
  colorHeading,
  headingDescription,
}) => {
  const { products } = useData();

  const [categoryId, setCategoryId] = useState(null);

  // Unique Categories
  const categories = [
    ...new Map(products.map((item) => [item.categoryId, item])).values(),
  ];

  // Filter Products
  const filterProduct = categoryId
    ? products.filter((p) => p.categoryId === categoryId)
    : products;

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-5 gap-5">
        <div>
          <h2 className="text-4xl font-bold">
            {heading}
            <span className="text-green-400">{colorHeading}</span>
          </h2>

          <p className="text-gray-500 mt-2">{headingDescription}</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCategoryId(null)}
            className={`px-4 py-2 rounded-lg border ${
              categoryId === null
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.categoryId}
              onClick={() => setCategoryId(category.categoryId)}
              className={`px-4 py-2 rounded-lg border ${
                categoryId === category.categoryId
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Demo Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 mx-5">
        {filterProduct.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-3">
              {product.name}
            </h3>

            <p className="text-gray-500">{product.brand}</p>

            <p className="text-green-600 font-bold mt-2">
              ৳ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHeading;