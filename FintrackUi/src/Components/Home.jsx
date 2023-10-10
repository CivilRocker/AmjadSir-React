import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { HomeContent } from "./Home/HomeContent";
import { LeftNav } from "./Home/LeftNav";


export const Home=()=>{
    return(
        <React.Fragment>            
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{border:1}}>
                        <CardContent>
                            <LeftNav/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <HomeContent/>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}