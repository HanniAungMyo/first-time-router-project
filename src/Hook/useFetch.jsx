import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((pre) => {
          return {
            loading: false,
            error: null,
            data: data,
          };
        });
      } catch (e) {
        setData((pre) => {
          return {
            loading: false,
            error: e.message,
            data: null,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
