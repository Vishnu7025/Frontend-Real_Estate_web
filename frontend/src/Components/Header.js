import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
 
//Mui imports

import { Button, Typography, Grid, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles'

// Componets
import CustomCard from './CustomCard'

const useStyles = makeStyles({
    leftNav: {
        marginRight: "auto",
    },
    rightNav: {
        marginLeft: "auto",
        marginRight: "10rem",
    },
});
const propertyBtn = {
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

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
  return (
      <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar variant="dense">
              <div className={classes.leftNav}>
                  <Button color='inherit' onClick={() =>navigate('/')}>
                      <Typography variant='h4'>sk</Typography>{" "}
                  </Button>
              </div>
              <div>
                  <Button color='inherit' style={{ mariginRight: "2rem" }} onClick={() => navigate('Listing')}>
                      <Typography variant='h6'>Listing</Typography>{" "}
                  </Button>
                  <Button color='inherit' style={{ mariginLeft: "2rem" }}>
                      <Typography variant='h6'>Agencies</Typography>{" "}
                  </Button>
              </div>
              <div className={classes.rightNav}>
                  <Button style={propertyBtn}>Add property</Button>
                  <Button style={loginBtn} onClick={() => navigate('login')} >Login</Button>
              </div>
          </Toolbar>
      </AppBar>
  )
}

export default Header