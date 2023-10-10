import React from "react";
import { AddCards } from "./Cards/AddCards";
import { DebitTrans } from "./Cards/DebitTrans";
import {Card,CardContent} from "@mui/material"
import { CreditTrans } from "./Cards/CreditTrans";


export const Cards=()=>{
    return(
        <React.Fragment>                                       
            <AddCards />
            <DebitTrans/>
            <CreditTrans/>
        </React.Fragment>
    )
}