import React from "react";
import bookIMG from "../../assets/book2.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container mx-auto rounded-2xl my-8">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img src={bookIMG} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success text-white mt-4">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
