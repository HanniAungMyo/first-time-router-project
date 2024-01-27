import React from "react";

const BookListComponent = ({ data }) => {
  return (
    <div className="w-[400px] h-[430px] border-2 rounded-lg mb-5 me-5">
      <div>
        <img
          className="rounded-t-lg border-gray-400 w-full"
          src={data.img}
          alt="BookImg"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold font-mono mt-2 ">{data.book}</h1>
        <p className="mt-2 text-lg font-serif font-bold ">{data.author}</p>
      </div>
      <div className="mt-2">
        <p className="font-mono line-clamp-2  text-stone-600">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default BookListComponent;
