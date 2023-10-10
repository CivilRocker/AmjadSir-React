import React,{useEffect, useState} from "react";
import { Grid,TextField,Button,Alert } from "@mui/material";
import axios from "axios"
import Select from "react-select"


export const AddExpenses=()=>{

    const [item,setItem]=useState("")               //try to keep same key of getter as of database key.
    const [cat,setCat]=useState(0)
    const [amnt,setAmnt]=useState(0)
    const [msg,setMsg]=useState("")
    const [isShow,setIsShow]=useState(false)
    const [options,setOptions]=useState([
        {value:1,label:"red"},
        {value:2, label:"green"},
        {value:3, label:"purple"}
    ])

    const handleAdd=async ()=>{
        const payload={
            item,cat,amnt
        }
        const result=await axios.post("http://localhost:3030/addexpenses",payload)
        // console.log("===>",result)
        setMsg(result.data)        
    }

    const getData=async ()=>{
        const result=await axios.get("http://localhost:3030/catdd")
        setOptions(result.data)
    }

    const resetData=()=>{
        setItem("")
        setAmnt(0)
        setCat(0)
    }

    useEffect(()=>{
        getData()
    },[])


    useEffect(()=>{
        if(msg!==""){
            setIsShow(true)
            resetData()
            setTimeout(()=>{
                // setIsShow(false)             //emptying setMsg in next line, this comment step is skipped.
                setMsg("")                      //emptying the setMsg here.
            },5000)
        } else{
            setIsShow(false)
        }
    },[msg])

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {/* <TextField variant="outlined" fullWidth label="Category" onChange={(e)=>setCat(e.target.value)}/> */}
                    <Select options={options} onChange={(opt)=>setCat(opt.value)}/>                    
                </Grid>
                <Grid item xs={3}>
                    <TextField value={item} type="text" variant="outlined" fullWidth label="Item" onChange={(e)=>setItem(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField value={amnt} type="number" variant="outlined" fullWidth label="Amount" onChange={(e)=>setAmnt(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth onClick={handleAdd} sx={{height:55}} disabled={item.length<3 || amnt<5}>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                   {/* {
                    msg!=="" && <Alert severity="success">{msg}</Alert>
                   } */}
                   {
                    isShow && <Alert severity="success">{msg}</Alert>
                   }
                </Grid>
            </Grid>

        </React.Fragment>
    )
}