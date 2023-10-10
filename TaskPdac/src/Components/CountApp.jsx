import React,{useState} from "react";
import { Grid,Button,TextField,Card,CardContent } from "@mui/material";

export const CountApp=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
       return(
        <React.Fragment>
            <Card sx={{width:450,height:400, marginLeft:50}}>
                <CardContent>
                    <Grid container spacing={1} align="center">
                        <Grid item xs={12}>
                            <h1>{count}</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fulllWidth color="success" onClick={()=>setCount(count+1)}>Increment</Button>
                        </Grid>
                        <Grid item x={6}>
                            <Button variant="contained" fullWidth color="error" disabled={!(count>0)} onClick={()=>setCount(count-1)}>Decremenet</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" placeholder="Enter Number"/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" placeholder="Enter Number"/>
                        </Grid>
                        <Grid item xs={12}>
                            <h1>0</h1>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={()=>setName(name/setName)}>Calculate</Button>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </CardContent>
            </Card>

        </React.Fragment>
    )
}