import React, { useState,useEffect } from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";
import Select from "react-select"
import { useSelector,useDispatch } from "react-redux";



export const DebitTrans=()=>{
    const [options,setOptions]=useState([])
    const [cardtype,setCardtype]=useState("")
    const [amnt,setAmnt]=useState(0)
    const [transdata,setTransdata]=useState([])
    const selectCards=useSelector((state)=>state.cardReducer.cards)
    const selectTrans=useSelector((state)=>state.cardReducer.trans)     //getting latest transaction 

    const dispatch=useDispatch()

    const handleDebit=()=>{
        //since transsaction will be multiple, taking in array
        const currTrans={cardtype,amnt,transtype:"D"}
        const payload=[currTrans,...transdata]
        const type="addtrans"
        const action={type,payload}
        dispatch(action)
    }

    useEffect(()=>{
        const newData=selectCards.map((item)=>({                //converting string to object for dropdown
            value:item,
            label:item
        }))
        setOptions(newData)
    },[selectCards])

    useEffect(()=>{
        setTransdata(selectTrans)
    },[selectTrans])

    return(
        <React.Fragment>
            <Card sx={{height:250,border:"1px solid black"}}>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}><h3>Debit Transactions</h3></Grid>
                <Grid item xs={5}>
                    <Select options={options} onChange={(opt)=>setCardtype(opt.value)}/>
                </Grid>
                <Grid item xs={5}>
                    <TextField type="number" onChange={(e)=>setAmnt(e.target.value)} variant="outlined" fullWidth label="Enter Amount"/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="error" onClick={handleDebit} sx={{height:55}}>Debit</Button>
                </Grid>
            </Grid>

                </CardContent>
            </Card>           
        </React.Fragment>
    )
}