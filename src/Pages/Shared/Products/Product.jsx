import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const Product = ({ product }) => {
  const { title, price, image, rating , id} = product;
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img className="p-5 h-80" src={image} alt="" />
      </div>
      <div className="px-5 pb-5">
        <a href="/">
          <h5
            title={title}
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {title.length > 40 ? title.slice(0, 40) : title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating.rate}
            emptyStarColor="#444"
          />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating.rate}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link to={`/details/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
