import React,{useState} from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";



export const Claim=()=>{

    const [empId,setEmpId]=useState(0)
    const [amnt,setAmnt]=useState(0)

    const handleSubmit=()=>{
        const payload={empId,amnt}
        //data will be vanished after the end of session or refresh of page==>use local storage
        // sessionStorage.setItem("expclaim",JSON.stringify(payload))
        localStorage.setItem("expclaim",JSON.stringify(payload))        //localStorage=>holds the data after the end of session/closing of app also.
        //setItem is used for sending data to localstorage, getItem to get data from local storage.
    }

    return(
        <React.Fragment>
            <Card>
                <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField variant="outlined" fullWidth label="Enter Employ ID" onChange={(e)=>setEmpId(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" fullWidth label="Enter Amount" onChange={(e)=>setAmnt(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="success" fullWidth onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
            </CardContent>
            </Card>            
        </React.Fragment>
    )
}