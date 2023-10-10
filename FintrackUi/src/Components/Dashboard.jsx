import React from "react";
import { Finance } from "./Dashboard/Finance";
import { Card,CardContent } from "@mui/material";

export const Dashboard=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Finance/>
                </CardContent>
            </Card>
            <h4>Dashboard</h4>
        </React.Fragment>
    )
}