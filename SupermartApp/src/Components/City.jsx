import React,{useState} from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import { CityList } from "./CityList";
import axios from "axios"

export const City=()=>{
    const [data,setData]=useState([])
    const [txt,setTxt]=useState(1)



    const handleFind= async()=>{
        const payload={ctrId:txt}                                                   //calling by ctrId
        const result= await axios.post("http://localhost:3030/citiesbyfilt",payload)
        // console.log("===>",result)
        setData(result.data)
    }

   
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={5}>Dropdown</Grid>
                <Grid item xs={5}>
                    <TextField variant="outlined" label="Search..." fullWidth onChange={(e)=>setTxt(e.target.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={handleFind}>Find</Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {/* Passing props{data} to child={Citylist} */}
                <CityList data={data.result}/>         
            </Grid>

        </React.Fragment>

    )
}