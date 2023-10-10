import React,{useState} from "react";
import { Button ,Grid,Card,CardContent} from "@mui/material";

export const Helper=()=>{
    const [name,setName]=useState("Farmer")
    return(
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid Item xs={12} sx={{marginTop:15}}>
                    <Button variant="contained" sx={{fontSize:20,fontWeight:"bold"}}>List Of Helpers</Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card sx={{width:450,height:400}}>
                        <CardContent>
                            <img src={`Helper/${name}.jpg`} style={{width:400,height:350}}></img>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Farmer")} variant="contained" sx={{fontSize:15,fontWeight:"bold"}} fullWidth>Farmer</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Fisherman")} variant="contained" sx={{fontSize:15,fontWeight:"bold"}} fullWidth>Fisherman</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Nurse")} variant="contained" sx={{fontSize:15,fontWeight:"bold"}} fullWidth>Nurse</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Police")} variant="contained" sx={{fontSize:15,fontWeight:"bold"}} fullWidth>Police</Button>
                </Grid>
                <Grid item xs={2.4}>
                    <Button onClick={()=>setName("Teacher")} variant="contained" sx={{fontSize:15,fontWeight:"bold"}} fullWidth>Teacher</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}