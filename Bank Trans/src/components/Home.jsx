import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { CatList } from "./Home/CatList";
import { HomeContent } from "./Home/HomeContent";
import { CardsList } from "./Cards/CardsList";


export const Home=()=>{
    return(
        <React.Fragment>
            <h1>Home page</h1>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <CatList/>
                        </CardContent>
                    </Card>                    
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <HomeContent/>
                        </CardContent>
                    </Card>                     
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <CardsList />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </React.Fragment>
    )
}