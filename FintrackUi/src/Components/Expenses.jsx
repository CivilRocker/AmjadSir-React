import React from "react";
import { Card,CardContent } from "@mui/material";
import { AddExpenses } from "./Expenses/AddExpenses";
import { DataList } from "./Expenses/DataList";


export const Expenses=()=>{
    return(
        <React.Fragment>
            <Card sx={{height:300}}>
                <CardContent>
                    <AddExpenses/>
                </CardContent>
            </Card>          
            <Card sx={{height:400}}>
                <CardContent>
                    <DataList/>
                </CardContent>
            </Card>          
        </React.Fragment>
    )
}