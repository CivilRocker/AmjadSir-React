import React from "react";
import { Fruits } from "./Fruits";
import { Helper } from "./Helper";
import { Vehicle } from "./Vehicle";
import { Saregama} from "./Saregama";
import { Signup } from "./Signup";
import { UserInfo } from "./UserInfo";
import { EmpCardLayout } from "./EmpCardLayout";
import { CountApp } from "./CountApp";
import { ReactBulb } from "./ReactBulb";
import { TodoColor } from "./TodoColor";
import { TrialBulb } from "./TrialBulb";

export const Home=()=>{
    return(
        <React.Fragment>
            <Saregama/>
            <Fruits/>
            <Helper/>
            <Vehicle/>
            <Signup/>
            <UserInfo/>
            <EmpCardLayout/>
            <CountApp/>
            <ReactBulb/>
            <TrialBulb/>
            {/* <TodoColor/> */}

        </React.Fragment>
    )
}