import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export const Home=()=>{
    return(
        <>

        <h1>Home tab</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/contact">
        <Button variant="contained">Go to Contact</Button>
        </Link>
        <br />
        <br />
        <Link to="/help">
            <Button variant="contained">Go to Help</Button>
        </Link>
        </>
    )
}