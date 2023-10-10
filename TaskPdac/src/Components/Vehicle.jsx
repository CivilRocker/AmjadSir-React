import React,{useState} from "react";
import { Grid,Button,Card,CardContent } from "@mui/material";


export const Vehicle=()=>{
    const [name,setName]=useState("Aeroplane")
    return(
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid item xs={12} >
                    <Button variant="contained" sx={{marginTop:15,fontWeight:"bold",fontSize:20}}>List Of Vehicles</Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card sx={{width:500,height:400}}>
                        <CardContent>
                            <img src={`Vehicle/${name}.jpg`} style={{width:450,height:350}} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Aeroplane")} variant="contained" sx={{fontSize:20,fontWeight:"bold"}} fullWidth>Aeroplane</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Bike")} variant="contained" sx={{fontSize:20,fontWeight:"bold"}} fullWidth>Bike</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Taxi")} variant="contained" sx={{fontSize:20,fontWeight:"bold"}} fullWidth>Taxi</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Train")} variant="contained" sx={{fontSize:20,fontWeight:"bold"}} fullWidth>Train</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Van")} variant="contained" sx={{fontSize:20,fontWeight:"bold"}} fullWidth>Van</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}