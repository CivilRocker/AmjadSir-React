import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



export const Account=()=>{

    const [curr,setCurr]=useState({})
    const [elig,setElig]=useState(0)
    const [app,setApp]=useState(0)
    const [outs,setOuts]=useState(0)
    const [tobepaid,setTobepaid]=useState(0)
    const navigate=useNavigate()                //act as link tag of html= use to navigate

    const handleApprove=()=>{
        const payload={
            ...curr,
            eligAmnt:elig,
            appAmnt:app,
            outstanding:outs,
            tobepaid                //value is not given since key is same as getter tobepaid
        }
        localStorage.setItem("expclaim", JSON.stringify(payload))     //prmoise call  //stringify=>since localstorage takes only string n number
        // setCurr({})
        navigate("/dash")
    }

    const handleReject=()=>{
        localStorage.removeItem("expclaim")
        setCurr({})
    }


    useEffect(()=>{             //doing this step to display tobepaid amount on componentdidupdate.
        setTobepaid(app-outs)
    },[app,outs])

    useEffect(()=>{                 //component did mount
        const currData=localStorage.getItem("expclaim")
        currData && setCurr(JSON.parse(currData))           //currdata &&=> added to avoid null exception or screen blank
    },[])

    return(
        <React.Fragment>
            {curr.empId && !curr.tobepaid && (
            <Grid container spacing={2} align="center">
                <Grid item xs={3} >
                   Emp Id:- {curr.empId}
                </Grid>
                <Grid item xs={3}>
                    Claim Amount:- {curr.amnt}
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth label="Eligible Amount" onChange={(e)=>setElig(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" label="Approved Amount" onChange={(e)=>setApp(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" label="Outstanding Amount" onChange={(e)=>setOuts(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    To be Paid: {tobepaid}                    
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success" onClick={handleApprove}>Approve</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error" onClick={handleReject}>Reject</Button>
                </Grid>
            </Grid>
            )}
        </React.Fragment>
    )
}