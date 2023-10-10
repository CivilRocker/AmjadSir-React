import React, { useState, useEffect } from "react";
import axios from "axios";

export const Object = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:4040/object");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Own Create Api</h1>

      {data.map((item) => (
        <div>
          <h1 style={{ color: item.clr }}>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
    </div>
  );
};
