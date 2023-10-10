import React,{useState} from "react";
import { Grid,Card,Button,CardContent } from "@mui/material";

export const Saregama=()=>{
    const [name,setName]=useState("")
    return(
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid item xs={12}>
                <Button variant="contained" sx={{color:"black" ,fontWeight:"bold",fontSize:20,marginntop:20,bgcolor:"aliceblue"}}>SaReGaMaPa</Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <img src="./Saregama/Piano.jpg"/>
                        </CardContent>
                        <CardContent >
                        <audio controls autoPlay src={`Saregama/${name}.mp3`}/>    
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("1-sa")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>SA</Button>
                    
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("2-re")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>RE</Button>
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("3-ga")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>GA</Button>
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("4-ma")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>MA</Button>
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("5-pa")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>PA</Button>
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("6-dha")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>DHA</Button>
                </Grid>
                <Grid item xs={1.71}>
                    <Button onClick={()=>setName("7-nisa")} variant="contained" fullWidth sx={{fontSize:20,fontWeight:"bold"}}>NI-SA</Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}