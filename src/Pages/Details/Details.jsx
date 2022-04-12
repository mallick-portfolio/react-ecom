import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  let params = useParams();
  const [product, setProduct] = useState("");
  const { title, price, image, description, category } = product;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  return (
    <div className="container my-10 grid sm:grid-cols-2">
      <div>
        <div className="bg-white">
          <img className="rounded-t-lg w-96" src={image} alt="" />
        </div>
      </div>

      <div className="">
        <div className="p-5 ">
          <div>
            <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
              {category}
            </h5>
            <h5 className="mb-2 uppercase text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <h5 className="mb-2 uppercase text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              ${price}
            </h5>
          </div>
          <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div>
          <Link
            to="/"
            className="inline-flex items-center py-3 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add To Cart <FontAwesomeIcon className="ml-2" icon={faCartArrowDown} />
          </Link>
          <Link
            to="/"
            className="inline-flex ml-5 items-center py-3 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Make Favorite <FontAwesomeIcon className="ml-2" icon={faHeart} />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
