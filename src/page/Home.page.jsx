import React from "react";
import { GetBookData } from "../service/book.service";
import { BookListComponent } from "../components";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

const HomePage = () => {
  const { data, error, loading } = useFetch(GetBookData, "/books");
  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className="flex flex-wrap">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
              <BookListComponent data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
