import React from "react";
import Review from "./Review";

function Reviews(props) {
  return (
    <div className="self-center bg-[#FFFFFF] w-3/6 flex-row justify-center rounded-lg sm:w-5/6">
      <Review review={props.review}></Review>
      <div className="flex-row align-middle justify-center ">
        <div className="flex align-middle justify-center m-2">
          <button onClick={props.changeFunc[0]}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="1.5em"
              className="text-indigo-800 hover:text-indigo-600"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <div className="w-7"></div>
          <button onClick={props.changeFunc[1]}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="text-indigo-800 hover:text-indigo-600"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>

        <div className="flex align-middle justify-center m-3">
          <button
            onClick={props.changeFunc[2]}
            className="text-center px-3 py-1 bg-indigo-400 text-indigo-800 hover:bg-indigo-800 hover:text-gray-200 rounded-lg text-sm"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
