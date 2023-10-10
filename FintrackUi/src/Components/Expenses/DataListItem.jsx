import React from "react";
import { Grid,Button } from "@mui/material";
import axios from "axios"

export const DataListItem=({item, doRefresh})=>{

    const handleDelete=async (_id)=>{
        const payload={_id}
        await axios.post("http://localhost:3030/expensedelete",payload)
        doRefresh()        
    }

    return(
        <React.Fragment>
           <Grid sx={{ padding:1,borderTop:"1px solid grey",borderBottom:"1px solid grey"}} item xs={3}>{item.item}</Grid>
           <Grid sx={{ padding:1,borderTop:"1px solid grey",borderBottom:"1px solid grey"}} item xs={3}>{item.cat}</Grid>
           <Grid sx={{ padding:1,borderTop:"1px solid grey",borderBottom:"1px solid grey"}} item xs={2}>{item.amnt}</Grid>
           <Grid sx={{ padding:1,borderTop:"1px solid grey",borderBottom:"1px solid grey"}} item xs={2}><Button variant="contained" color="success" >Edit</Button></Grid>
           <Grid sx={{ padding:1,borderTop:"1px solid grey",borderBottom:"1px solid grey"}} item xs={2} onClick={()=>handleDelete(item._id)}><Button variant="contained" color="error">Delete</Button></Grid>

        </React.Fragment>
    )
}