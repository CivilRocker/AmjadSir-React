import React from "react";
import { Cards } from "./Cards";
import { AccountSummary } from "./AccountSummary";
import { Home } from "./Home";
import { Loans } from "./Loans";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Nav } from "./Nav";



export const Landing=()=>{
    return(
        <React.Fragment>            
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/cards" element={<Cards/>} />
                    <Route path="/accsum" element={<AccountSummary/>} />
                    <Route path="/loan" element={<Loans/>} />
                    {/* home should be written in last line of route,if written on top,since every component is having '/' it can direct to any other component instead of home*/}
                    <Route path="/" element={<Home/>} />    
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}