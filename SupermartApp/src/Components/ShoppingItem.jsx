import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";

export const ShoppingItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "peachpuff"}}>
        <CardContent>
          <Grid container spacing={3} align="center">
            <Grid item xs={4}>
              <Badge badgeContent={`$` + item.price} max={999} color="primary">
                <img src={item.image} width={155} height={160} />
              </Badge>
            </Grid>
            <Grid item xs={4} align="center">
              {" "}
              <strong>{item.title.slice(0, 19).trim() + "..."}</strong>
            </Grid>
            <Grid item xs={4}>
              Price:{item.price}
            </Grid>
            <Grid item xs={4}>
              {item.description.slice(0, 70).trim() + "..."}
            </Grid>
            <Grid item xs={4}>
              <Rating value={item.rating.rate} />
            </Grid>
            <Grid item xs={4}>
              {item.rating.count}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
