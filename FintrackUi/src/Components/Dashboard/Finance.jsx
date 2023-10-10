import React,{useState,useEffect} from "react";
import { Grid,Button,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const Finance=()=>{

    const [curr,setCurr]=useState({})
    const [paidamnt,setPaidamnt]=useState(0)
    const [balance,setBalance]=useState(0)
    const navigate=useNavigate()


    const handleApprove=()=>{
        const payload={
            ...curr,
            paidamnt,
            balance}
        localStorage.setItem("expclaim",JSON.stringify(payload))
        navigate("/")
    }

    const handleReject=()=>{
        localStorage.removeItem("expclaim")
        navigate("/")
    }


    useEffect(()=>{
        setBalance(curr.tobepaid-paidamnt)
    },[paidamnt])

    useEffect(()=>{
        const currData=localStorage.getItem("expclaim")
        currData && setCurr(JSON.parse(currData))           //if data is not there, screen will not become blank
        // console.log(curr)
    },[])
  

    return(
        <React.Fragment>
            {curr.tobepaid && (
            <Grid container spacing={2} align="center">
                <Grid item xs={2}>
                    Employ ID:-{curr.empId}
                </Grid>
                <Grid item xs={2}>
                   Amount:- {curr.amnt}
                </Grid>
                <Grid item xs={2}>
                   Eligible Amount:- {curr.eligAmnt}
                </Grid>
                <Grid item xs={2}>
                  Approved Amount:-  {curr.appAmnt}
                </Grid>
                <Grid item xs={2}>
                    Outstanding Amount:- {curr.outstanding}
                </Grid>
                <Grid item xs={2}>
                    To be Paid :- {curr.tobepaid}
                </Grid>
                <Grid item xs={2}>
                    <TextField onChange={(e)=>setPaidamnt(e.target.value)} variant="outlined" label="Paid Amount"  fullWidth/>
                </Grid>
                <Grid item xs={2}>Balance Amount:- {balance}</Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="success" fullWidth onClick={handleApprove}>Approve</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="error" fullWidth onClick={handleReject}>Reject</Button>
                </Grid>
            </Grid>
            )}
        </React.Fragment>
    )
}