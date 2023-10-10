import React, { useState,useEffect } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";

export const Categories = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("");
  const dispatch = useDispatch();

  const selectCats=useSelector((state)=>state.loanReducer.cats)

  const handleAdd = () => {
    setData([...data, cat]);
    setCat("");
  };

  const handleSubmit = () => {
    const type = "addcat"; //addcats from loanreducer
    const payload = data;
    const action = { type, payload };
    dispatch(action);
    // console.log("=====", action);
  };

  useEffect(()=>{
    setData(selectCats)
  },[selectCats])

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField value={cat} onChange={(e) => setCat(e.target.value)} variant="outlined" label="Enter Category" fullWidth/>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleAdd} variant="contained" fullWidth color="warning" sx={{ height: 55 }}> Add </Button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "coral" }}>
              <CardContent>{item}</CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={3}>
          <Button onClick={handleSubmit} variant="contained" color="success" sx={{ height: 60 }}>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
