import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import CustomCard from './CustomCard'
import { Button, Typography,Grid ,AppBar,Toolbar} from "@mui/material";
import {makeStyles} from '@mui/styles'

import CssBaseline from '@mui/material/CssBaseline';
import city  from './Assets/city.webp';

const useStyles = makeStyles({
  leftNav:{
    marginRight:"auto",
  },
  rightNav:{
    marginLeft:"auto",
    marginRight:"10rem",
  },
  cityImg:{
    width:'100%',
    height:'92vh'
  },
  overlayText:{
    position:'absolute',
    zIndex:'100',
    top:'100px',
    textAlign:'center', 
  },
  homeText:{
    color:'grey',
    fontWeight:'bolder',
  },
  homeBtn:{
    fontSize:'3.5rem',
    borderRadius:'15px',
    backgroundColor:'green',
    marginTop:'2rem',
    boxShadow:'3px 3px 3px white'
  }
});
const propertyBtn ={
  backgroundColor: "green",
  color: "white",
  width: "15rem",
  fontSize: "1.1rem",
  marginRight: "1rem",

}
const loginBtn = {
    backgroundColor: "white",
    color: "black",
    width: "15rem",
    fontSize: "1.1rem",
    marginleft: "1rem",
}
function Home() {
  const [btnColor, setBtnColor] = useState("error");
  const classes = useStyles();
  return (
  <>
    <CssBaseline />
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar variant="dense">
          <div className={classes.leftNav}>
            <Button color='inherit'>
              <Typography variant='h4'>sk</Typography>{" "}
              </Button>
          </div>
          <div>
            <Button color='inherit' style={{mariginRight:"2rem"}}>
              <Typography variant='h6'>Listing</Typography>{" "}
              </Button>
            <Button color='inherit' style={{ mariginLeft: "2rem" }}>
              <Typography variant='h6'>Agencies</Typography>{" "} 
              </Button>
          </div>
          <div className={classes.rightNav}>
            <Button style={propertyBtn}>Add property</Button>
            <Button style={loginBtn} >Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <img src='{city}' className={classes.cityImg} />
      <div className={classes.overlayText}>
        <Typography variant='h1' className={classes.homeText}>FIND YOUR <span style={{color:"green"}}> NEXT PROPERTY</span> ON SK WEBSITE </Typography>
        <Button variant='conatined' className={classes.homeBtn}>SEE ALL PROPERTIES</Button>
      </div>
  </>

  )
}

export default Home