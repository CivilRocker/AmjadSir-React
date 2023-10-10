import React from "react";
import { Grid,Button,Avatar,Card,CardContent} from "@mui/material";

export const EmpCardLayout=()=>{
    return(
        <React.Fragment>
            <Card align="center" sx={{border:"0.5px solid black",marginLeft:45,marginTop:10,bgcolor:"white",width:700,height:450}}>
            <Grid container>
                <Grid item xs={6}>
                    <Avatar src="./Avatar.png" sx={{width:320,height:320,marginTop:8}}/>
                </Grid>
                <Grid item xs={6} rowSpacing={1}>
                    <Grid container>
                        <Grid item xs={12} sx={{height:100}}>
                        <h1 style={{fontSize:55}}>john SMITH</h1>
                        </Grid>
                        <Grid item xs={12}>
                        <span style={{fontSize:35}}>Graphic Designer</span>
                        </Grid>
                            <Grid container sx={{marginTop:3}}>
                            <Grid item xs={3} >
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>ID NO</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>:</Button>
                            </Grid>
                            <Grid item xs={7} align="left">
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold",marginLeft:1,color:"red"}}>00563888902999</Button>
                            </Grid>
                            <Grid item xs={3} >
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>EMAIL</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>:</Button>
                            </Grid>
                            <Grid item xs={7}>
                                <Button sx={{marginTop:0.6,fontSize:16,color:"black",marginLeft:1}}>john@mockofun.com</Button>
                            </Grid>
                            <Grid item xs={3} >
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>PHONE</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>:</Button>
                            </Grid>
                            <Grid item align="left" xs={7}>
                                <Button  sx={{marginTop:0.6,fontSize:16,color:"black",marginLeft:1}}>00537779834</Button>
                            </Grid>
                            <Grid item xs={3} >
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>DATE</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{fontSize:20,color:"black",fontWeight:"bold"}}>:</Button>
                            </Grid>
                            <Grid item xs={7} align="left">
                                <Button sx={{marginTop:0.6,fontSize:16,color:"black",marginLeft:1}}>MM/DD/YEAR</Button>
                            </Grid>
                            </Grid>
                       </Grid>               
                </Grid>
            </Grid>

            </Card>         
        </React.Fragment>  
    )
}     
                
            
