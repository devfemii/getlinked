import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
        .get(url)
        // .then((res) => {
        //     console.log(res);
        // })
        .catch((err) => {
            console.log(err);
        })
        .then((data) => setData(data.data))
        ;
};

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;

