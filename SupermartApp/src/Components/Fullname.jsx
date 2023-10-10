import React from "react";
import { Grid,TextField,Button } from "@mui/material";
import { useState } from "react";
import axios from "axios"


export const Fullname=()=>{

    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [mname,setMname]=useState("")
    const [fullname,setFullname]=useState("")

    const handleFullname= async()=>{
        const payload={fname,mname,lname}
        const result =await axios.post("http://localhost:5050/fullname",payload)        //find details in node folder==>postapp   
        setFullname(result.data)
        console.log("===>",result)              //==>check for data in result,(result.data)==>.data is taken since result object will be having more keys
    }


    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField variant="outlined" label="First Name" fullWidth onChange={(e)=>setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" label="Middle Name" fullWidth onChange={(e)=>setMname(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" label="Last Name" fullWidth onChange={(e)=>setLname(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth onClick={handleFullname}>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                    <h1>{fullname}</h1>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}