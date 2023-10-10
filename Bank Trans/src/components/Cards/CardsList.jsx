import React,{useState,useEffect} from "react";
import { Grid,Button } from "@mui/material";
import { useSelector } from "react-redux";


export const CardsList=()=>{

    const[data,setData]=useState([])
    const selectData=useSelector((state)=>state.cardReducer.cards)

    useEffect(()=>{
        setData(selectData)
    },[selectData])

    return(
        <React.Fragment>
            <Grid container spacing={2}>                
                {
                    data.map(item=>
                        <Grid item xs={12}>
                        <Button variant="contained" color="warning" fullWidth>{item}</Button>
                        </Grid>
                        )
                }
            </Grid>

        </React.Fragment>
    )
}