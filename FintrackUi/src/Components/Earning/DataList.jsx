import React,{useState,useEffect} from "react";
import { DataListItem } from "./DataListItem";
import axios from "axios"
import { Grid } from "@mui/material";


export const DataList=()=>{
    const [data,setData]=useState([])
    const [refresh,setRefresh]=useState(false)

    const doRefresh=()=>{                           //need to call this from child when data is deleted and need to refresh
        // setRefresh(!refresh)                    //setRefresh= vice versa of refresh
        setRefresh(true)                            //setRefresh=
    } 
    
    useEffect(()=>{                 //getData will be called everytime data is refreshed.
        if(refresh){
            getData()
            setRefresh(false)           //again toggling back to false state.
        }
    },[refresh])


    const getData=async ()=>{
        const result=await axios.get("http://localhost:3030/earnings")
        // console.log(result)
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])


    return(
        <React.Fragment>
            <Grid container spacing={2}>
            {
                data.map(item=>
                    <DataListItem item={item} doRefresh={doRefresh}/>)                    
            }
            </Grid>
            

        </React.Fragment>
    )
}