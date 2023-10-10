import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

export const DataShop = () => {
  const [data, setData] = useState([]);
  const [oridata, setOridata] = useState([]);
  const [txt, setTxt] = useState("");

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setOridata(result.data)
  };

  useEffect(() => {
    const result = oridata.filter((item) =>
      item.title.toUpperCase().includes(txt.toUpperCase())
    );
    setData(result);
  }, [txt]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Shopping Data</h1>
      <TextField
        variant="outlined"
        label="Search Here......."
        onChange={(e) => setTxt(e.target.value)}
      />
      {data.map((item) => (
        <div>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <img src={item.image} alt="" height={100} width={100} />
        </div>
      ))}
    </div>
  );
};
