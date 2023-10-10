import React from "react";
import { Grid,Button,TextField,Avatar, Card, CardContent} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { Anchor, Google } from "@mui/icons-material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIn from "@mui/icons-material/LinkedIn";
import Checkbox from '@mui/material/Checkbox';

export const Signup=()=>{
    return(
        <React.Fragment>
            <Grid align="center" sx={{marginTop:2}}><Button variant="contained">SIGN UP/ LOGIN FORM</Button></Grid>
            <Grid container >
                <Grid item xs={6}>
                    <Grid item xs={10}>
                        <Card sx={{marginLeft:10,borderRadius:5}}>
                            <CardContent style={{marginLeft:30,marginRight:25}}>
                            <h5>SIGN UP</h5>
                            <label><h5>Email</h5></label>
                            <TextField variant="outlined" fullWidth></TextField>
                            <label><h5>Password</h5></label>
                            <TextField variant="outlined" fullWidth></TextField>
                            <Button variant="contained" fullWidth sx={{marginTop:4,bgcolor:"magenta"}}>SIGN UP</Button>
                            <br />
                            <br />
                            <Grid container>
                            <Grid item xs={5.5}></Grid>
                            <Avatar variant="rounded" sx={{bgcolor:"whitesmoke",color:"black",fontSize:12,width:20,height:20}}>OR</Avatar>
                            </Grid>
                            <br />
                            <Google sx={{marginLeft:18,color:"red"}}/>
                            <FacebookRoundedIcon sx={{marginLeft:2,color:"blue"}}/>
                            <LinkedIn sx={{marginLeft:2,color:"blue"}}/>
                             <Grid item xs={12} align="center" sx={{paddingBottom:5}}>
                                <p>Already a user? <a href="#" style={{color:"black"}}>LOGIN</a></p>
                            </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    </Grid>
                <Grid item xs={6}>
                <Grid item xs={10}>
                        <Card sx={{marginLeft:10,borderRadius:5}}>
                            <CardContent style={{marginLeft:30,marginRight:25}}>
                            <h5>LOGIN</h5>
                            <label><h5>Email</h5></label>
                            <TextField variant="outlined" fullWidth></TextField>
                            <label><h5>Password</h5></label>
                            <TextField variant="outlined" fullWidth></TextField>
                            <Grid item>
                                <Checkbox defaultChecked/>
                                <span>Remember me?</span>
                            </Grid>
                            <Button variant="contained" fullWidth sx={{marginTop:4,bgcolor:"red"}}>LOGIN</Button>
                            <Grid item align="right">
                                <span>Forgot Password?</span>
                            </Grid>
                            <Grid container>
                            <Grid item xs={5.5}></Grid>
                            <Avatar variant="rounded" sx={{bgcolor:"whitesmoke",color:"black",fontSize:12,width:20,height:20}}>OR</Avatar>
                            </Grid>
                            <br />
                            <Grid item align="center">
                            <Google sx={{color:"red"}}/>
                            <FacebookRoundedIcon sx={{marginLeft:2,color:"blue"}}/>
                            <LinkedIn sx={{marginLeft:2,color:"blue"}}/>
                            </Grid>
                             <Grid item xs={12} align="center">
                                <p>Need an account? <a href="#" style={{color:"black"}}>SIGN UP</a></p>
                            </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
