import { useEffect } from "react";

import axios from "../axios";

const AxiosGet = (url, state) => {
  useEffect(() => {
    axios.get(url).then((res) => {
      state(res.data.results);
    });
  }, [url, state]);
};

export default AxiosGet;
