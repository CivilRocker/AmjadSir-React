import React,{useState} from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Fruits=()=>{
    const [name,setName]=useState("Apple")
    return(
        <React.Fragment>
            <Grid container spacing={3} align="center" sx={{marginTop:10}}>
                <Grid item xs={12} >
                    <Button variant="contained" sx={{color:"black" ,fontWeight:"bold",fontSize:20,marginntop:20,bgcolor:"khaki"}}>List of Fruits</Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card sx={{width:400,height:350}}>
                        <CardContent>
                            <img src={`Fruits/${name}.jpg`} style={{width:300,height:300}}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2.4}>
                    <Button variant="contained" fullWidth sx={{fontSize:15, fontWeight:"bold"}} onClick={()=>setName("Apple")}>Apple</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button variant="contained" fullWidth sx={{fontSize:15, fontWeight:"bold"}}onClick={()=>setName("Banana")}>Banana</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button variant="contained" fullWidth sx={{fontSize:15, fontWeight:"bold"}}onClick={()=>setName("Kivi")}>Kivi</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button variant="contained" fullWidth sx={{fontSize:15, fontWeight:"bold"}}onClick={()=>setName("Mango")}>Mango</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button variant="contained" fullWidth sx={{fontSize:15, fontWeight:"bold"}}onClick={()=>setName("Orange")}>Orange</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}