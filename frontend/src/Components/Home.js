import React,{useState} from 'react'
import { Link } from 'react-router-dom'

//Mui imports
import { Button, Typography,Grid ,AppBar,Toolbar} from "@mui/material";
import {makeStyles} from '@mui/styles'

//components
import Header from './Header';
import CustomCard from './CustomCard'

//Assets
import city  from './Assets/city.webp';

const useStyles = makeStyles({
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

function Home() {
  const [btnColor, setBtnColor] = useState("error");
  const classes = useStyles();
  return (
  <> 
      <img src='{city}' className={classes.cityImg} />
      <div className={classes.overlayText}>
        <Typography variant='h1' className={classes.homeText}>FIND YOUR <span style={{color:"green"}}> NEXT PROPERTY</span> ON SK WEBSITE </Typography>
        <Button variant='conatined' className={classes.homeBtn}>SEE ALL PROPERTIES</Button>
      </div>
  </>

  )
}

export default Home