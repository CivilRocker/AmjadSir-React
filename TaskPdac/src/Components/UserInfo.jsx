import React from "react";
import { Grid,TextField,Button } from "@mui/material";


export const UserInfo=()=>{
    return(
        <div className="sub" style={{marginTop:150}}>
            <Grid container spacing={5} sx={{padding:5}}>
                <Grid item xs={12} align="center"><h1>User Information</h1></Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="First Name" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}  />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Middle Name" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}} />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Last Name" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Email" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Mobile No." fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Address" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Select City" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Select State" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Select Country" fullWidth sx={{bgcolor:"white",border:"0.5px solid black"}}/>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="info" fullWidth sx={{borderRadius:5,bgcolor:"aqua",color:"black",fontSize:20,border:"0.5px solid black"}}>Submit</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="warning" fullWidth sx={{borderRadius:5,bgcolor:"pink",color:"black",fontSize:20,border:"0.5px solid black"}} >Cancel</Button>
                </Grid>
            </Grid>
        </div>
    )
}