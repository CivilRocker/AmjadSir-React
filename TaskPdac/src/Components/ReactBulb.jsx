import React, {useState,useEffect} from "react";
import { Grid,Button,Card } from "@mui/material";


export const ReactBulb=()=>{

    const [bulb,setBulb]=useState("Bulb-ON")
    const [istext,setIstext]=useState("ON")

    const myFunction =()=>{
            if (ReactBulb === bulb) {
            setBulb("Bulb-ON");
            setIstext('OFF');
            } else {
            setBulb("Bulb-OFF");
            setIstext('OFF');
            }
        }      
    return(
        <>        
        <Grid container spacing={3}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Card style={{width:280,height:450}} align="center">
                    <img src={`Bulb/${bulb}.jpg`} />
                </Card>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>            
            <Grid item xs={4}>
                <Button variant="contained" sx={{ml:10,height:70,fontWeight:"bold",fontSize:40}} onClick={myFunction}>{istext}</Button>
            </Grid>            
            <Grid item xs={4}></Grid>            
        </Grid>
        </>
    )
}