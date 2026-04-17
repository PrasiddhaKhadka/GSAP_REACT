import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export const ApiCallBack = ({ baseUrl }) => {
  const [data, setData] = useState([]);

  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get(baseUrl);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [baseUrl]);


  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      <div>Hello World!</div>
      <div>Hello World!</div>
      <pre>{data}</pre>
    </>
  );
};
