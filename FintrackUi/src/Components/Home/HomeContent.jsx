import React from "react";
import { Claim } from "./Claim";
import { Grid,Card,CardContent } from "@mui/material";
import { Account } from "./Account";


export const HomeContent=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Claim/>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Account/> 
                </CardContent>
            </Card>
                
            
            <h4>HomeContent</h4>    

        </React.Fragment>
    )
}