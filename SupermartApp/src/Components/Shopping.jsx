import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { ShoppingItem } from "./ShoppingItem";
import axios from "axios";

export const Shopping = () => {
  const [data, setData] = useState([]);
  const [origdata, setOrigdata] = useState([]);
  const [txt, setTxt] = useState("");

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setOrigdata(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = origdata.filter((item) =>
      item.title.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtered);
  }, [txt]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Search...."
            fullWidth
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        {data.map((item) => 
           <ShoppingItem item={item} />
        )}
      </Grid>
    </React.Fragment>
  );
};
