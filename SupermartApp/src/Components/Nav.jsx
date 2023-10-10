import React,{useState} from "react";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";


export const Nav=()=>{

    const [data,setData]=useState(["Home","Services","Shopping","Contact","AboutUs","Help"])

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item  xs={2}>
                    <Link to="/home">
                        <Button>Home</Button>
                    </Link>
                </Grid>
                <Grid item  xs={2}>
                    <Link to="/contact">
                        <Button>Contact</Button>
                    </Link>
                </Grid>
                <Grid item  xs={2}>
                    <Link to="/services">
                        <Button>Services</Button>
                    </Link>
                </Grid>
                <Grid item  xs={2}>
                    <Link to="/shopping">
                        <Button>Shopping</Button>
                    </Link>
                </Grid>
                <Grid item  xs={2}>
                    <Link to="/aboutus">
                        <Button>About Us</Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/help">
                    <Button variant="containedx">Help</Button>
                    </Link>
                </Grid>
                
                {/* {
                    data.map((item)=>
                        <Grid item xs={2}>
                            <Link to={`/${item.toLowerCase()}`}  style={{textDecoration:"none"}}>  
                                         {/*`${}`=> to access all tabs of navigation bar-dynamically adopting*/}
                                {/* <Button variant="contained" fullWidth >{item}</Button> */}
                            {/* </Link> */}
                        {/* </Grid> */}
                            {/* ) */}
                {/* } */}
            </Grid>                  
        </React.Fragment>
    )
}