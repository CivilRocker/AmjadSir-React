import React, {useState,useEffect} from "react";
import { Grid,Button,Card } from "@mui/material";


export const TrialBulb=()=>{

    const [bulb,setBulb]=useState("Bulb-OFF")
    const [ison,setIson]=useState(false)

    const handleBulb =()=>{   
        // setBulb("Bulb-ON")
        setIson(!ison)                 
        }      
    return(
        <>        
        <Grid container spacing={3} sx={{margin:"10px"}}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Card style={{width:280,height:450}} align="center">
                    {/* <img src={`Bulb/${bulb}.jpg`} /> */}
                    <img src={ison? `Bulb/Bulb-ON.jpg`:`Bulb/Bulb-OFF.jpg`}/>
                </Card>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>            
            <Grid item xs={4}>
                <Button variant="contained" sx={{ml:10,height:70,fontWeight:"bold",fontSize:40}} onClick={handleBulb}>{ison? "OFF" : "ON"}</Button>
            </Grid>            
            <Grid item xs={4}></Grid>            
        </Grid>
        </>
    )
}