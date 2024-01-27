import React from "react";
import useFetch from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import { GetBookData } from "../../service/book.service";

const DetailBookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(GetBookData, `books/${id}`);
  return (
    <div>
      {loading ? (
        <h1>Loadings....</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <>
              <div>
                <img
                  className="rounded-t-lg border-gray-400"
                  src={data.img}
                  alt="Bookimg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-mono mt-2 ">
                  {data.book}
                </h1>
                <p className="mt-2 text-lg font-serif font-bold ">
                  {data.author}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-mono line-clamp-2  text-stone-600">
                  {data.description}
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
