import React,{useState,useEffect} from "react";
import { Grid,Card,Cardcontent, CardContent } from "@mui/material";
import axios from "axios"

export const CountryList=()=>{

    const [data,setData]=useState([])

    const getData=async ()=>{
        const result=await axios.get("http://localhost:3030/countries")
        setData(result.data.result)
    }

    useEffect(()=>{         //componentdidmount stage=>data will be displayed at the launch of page.
        getData()
    },[])


    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Grid container spacing={3} align="center">
                        <Grid item xs={6}>Id</Grid>
                        <Grid item xs={6}>Name</Grid>
                    
                    {
                    // data.result && data.result.length>0 &&
                    // data.result.map(item=>
                    data && data.length>0 &&
                    data.map(item=>
                        <React.Fragment>
                            <Grid item xs={6}>{item.id}</Grid>
                            <Grid item xs={6}>{item.name}</Grid>
                        </React.Fragment>
                        )
                    }
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}