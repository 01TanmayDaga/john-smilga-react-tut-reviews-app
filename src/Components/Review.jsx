import React from "react";

function Review(props) {
  return (
    <article className=" flex  justify-center flex-col p-4">
      <div className="self-center">
        <span className="relative bg-[#645BFF] text-white top-10 z-10">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            className="rounded-full z-10 bg-indigo-700 p-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </span>

        <img
          src={props.review.image}
          className="h-36 w-36  rounded-[100%] self-center drop-shadow-[8px_-5px_#645BFF]"
        />
      </div>

      <div>
        <h1 className="text-center text-3xl transform capitalize m-1">
          {props.review.name}
        </h1>

        <h5 className="text-center text-[#645BFF] capitalize m-1">
          {props.review.job}
        </h5>
      </div>

      <div className="text-center justify-center text-[#475569]">
        {props.review.text}
      </div>
    </article>
  );
}

export default Review;
