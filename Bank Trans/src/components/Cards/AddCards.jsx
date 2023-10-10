import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent,Button,TextField } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";


export const AddCards=()=>{

    const [txt,setTxt]=useState("")
    const [data,setData]=useState([])
    const dispatch=useDispatch()

    const selectCards=useSelector((state)=>state.cardReducer.cards)

    const handleAdd=()=>{
        setData([...data,txt])
        // console.log(data)
        setTxt("")
    }

    const handleSubmit=()=>{
        const type="addcard"
        const payload=data
        const action={type,payload}
        dispatch(action)
    }

    useEffect(()=>{
        setData(selectCards)
    },[selectCards])

    return(
        <React.Fragment>
            <Card sx={{border:"1px solid black"}}>
                <CardContent>
                    <Grid container spacing={2} align="center">
                        <Grid item xs={8}>
                            <TextField value={txt} onChange={(e)=>setTxt(e.target.value)} variant="outlined" fullWidth placeholder="Enter Card Category"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={handleAdd} variant="contained" fullWidth color="info" sx={{height:55}}> Add Category</Button>
                        </Grid>
                        {
                            data.map(item=>
                                <Grid item xs={3}>
                                <Card sx={{bgcolor:"cornsilk"}}>
                                    <CardContent>
                                    {item}
                                    </CardContent>
                                </Card>
                                </Grid>
                                )
                        }
                            <Grid item xs={3}>
                                <Button onClick={handleSubmit} variant="contained" fullWidth color="secondary" sx={{height:60}}>Submit</Button>
                            </Grid>
                    </Grid>          
                </CardContent>
            </Card>
        </React.Fragment>
    )
}