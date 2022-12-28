import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import CustomCard from './CustomCard'
import { Button, Typography,Grid ,AppBar,Toolbar} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  leftNav:{
    marginRight:"auto",
  },
  rightNav:{
    marginLeft:"auto",
    marginRight:"10rem",
  },
  propertyBtn: {
    backgroundColor:"green",
    color:"white",
    width:"15rem",
    fontSize:"1.1rem",
    marginRight:"1rem",
    '&:hover': {
      backgroundColor: "blue",
    }
  },
  loignBtn: {
    backgroundColor: "white",
    color: "black",
    width: "15rem",
    fontSize: "1.1rem",
    marginleft: "1rem",
    '&:hover':{
      backgroundColor:"green",
    }
  },
});

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
            <Button className={classes.propertyBtn}>Add Property</Button>
            <Button className={classes.loignBtn}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
  </>

  )
}

export default Home