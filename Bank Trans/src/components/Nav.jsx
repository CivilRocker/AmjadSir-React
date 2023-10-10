import React from "react";
import { Grid,Card,CardContent,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



export const Nav=()=>{
    const navigate=useNavigate()            //hook

    return(
        <React.Fragment>
            <Card>
                <CardContent>
                   <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Button onClick={()=>navigate("/")} variant="contained" fullWidth>Home</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={()=>navigate("/accsum")} variant="contained" fullWidth>Account Summary</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={()=>navigate("/cards")} variant="contained" fullWidth>Cards</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={()=>navigate("/loan")} variant="contained" fullWidth>Loans</Button>
                    </Grid>
                    </Grid>                     
                </CardContent>
            </Card>
        </React.Fragment>
    )
}