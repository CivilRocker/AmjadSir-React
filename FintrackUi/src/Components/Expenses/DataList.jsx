import React,{useState,useEffect} from "react";
import { DataListItem } from "./DataListItem";
import { Grid } from "@mui/material";
import axios from "axios"


export const DataList=()=>{

    const [data,setData]=useState([])
    const [refresh,setRefresh]=useState(false)

    const doRefresh=()=>{
        // setRefresh(!refresh)
        setRefresh(true)
    }

    useEffect(()=>{
        if(refresh){
            getData()
            setRefresh(false)
        }
    },[refresh])



    //getting data on page mount
    const getData=async ()=>{
        const result=await axios.get("http://localhost:3030/expenses")
        // console.log("===>",result)
        setData(result.data)
    }

    //getting data on page mount
    useEffect(()=>{
        getData()
    },[])

    return(
        <React.Fragment>
            <Grid container spacing={2}>
            {
                data.map(item=>
                    <DataListItem item={item} doRefresh={doRefresh} />)
            }
            </Grid>

        </React.Fragment>
    )
}