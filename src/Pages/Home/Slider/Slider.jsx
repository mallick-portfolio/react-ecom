import React from "react";
const Slider = () => {
  return (
    <div id="controls-carousel" className="relative" data-carousel="static">
      <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
          data-carousel-item=""
        >
          <img
            src="https://i.ibb.co/2hn9v2z/72fd34db-a10a-4f52-8e8e-21b787bab0cc-jpg-1200x1200.jpg
            "
            className="block absolute top-0 left-0 w-full h-min"
            alt="..."
          />
        </div>

        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item="active"
        >
          <img
            src="https://i.ibb.co/ph50wp5/3c2312d7-ccdd-4392-bf22-b8b552d5ce22.jpg
            "
            className="block absolute top-0 left-0 w-full h-min"
            alt="..."
          />
        </div>

        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
          data-carousel-item=""
        >
          <img
            src="https://i.ibb.co/XS4NxbX/20818bea-d6dd-4710-9086-e1c93afbd6ff.jpg
            "
            className="block absolute top-0 left-0 w-full h-min"
            alt="..."
          />
        </div>
      </div>

      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
