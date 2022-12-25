import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
const useStyles = makeStyles({
    divStyles:{
      width:'50%',
      height:'40%'
    }
});
function Login() {
  const [btnColor,setBtnColor] = useState('error');
  const classes = useStyles();
  return (
    <div className='classes.divStyles'>
        <h1>This is login page</h1>
        <Typography align='center' variant='h2'>heooo</Typography>
      <Typography variant='body1'>
        What is Lorem Ipsum?
        Lorem Ipsum is simplssdfdvdy dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </Typography>
        <Button onClick={() => setBtnColor("success")} color={btnColor} size='large' variant='contained'>hello</Button>
        
    </div>
  )
}

export default Login