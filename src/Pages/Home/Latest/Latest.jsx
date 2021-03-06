import React, { useState, useEffect } from "react";
import Products from "../../Shared/Products/Products";
const Latest = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('products/')
  useEffect(() => {
    fetch(`https://fakestoreapi.com/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
  return (
    <div className="container">
      <div className="my-10">
        <h1 className="text-5xl text-center font-semibold font-mono mb-4">
          Latest Product
        </h1>
        <hr />

        <div className="text-center rounded-md shadow-sm" role="group">
          <button
          onClick={()=> setCategory('products')}
            type="button"
            className="py-2 px-4 mx-3 my-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            All
          </button>
          <button
          onClick={()=>setCategory(`products/category/men's clothing`)}
            type="button"
            className="py-2 px-4 mx-3 my-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Men's Clothing
          </button>
          <button
          onClick={()=>setCategory(`products/category/women's clothing`)}
            type="button"
            className="py-2 px-4 mx-3 my-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Women Clothing
          </button>
          <button
          onClick={()=>setCategory(`products/category/jewelery`)}
            type="button"
            className="py-2 px-4 mx-3 my-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Jewelery
          </button>
          <button
          onClick={()=>setCategory(`products/category/electronics`)}
            type="button"
            className="py-2 px-4 mx-3 my-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Electronics
          </button>
        </div>
        { <Products products={products} />}
      </div>
    </div>
  );
};

export default Latest;
