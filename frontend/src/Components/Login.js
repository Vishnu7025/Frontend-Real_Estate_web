import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
function Login() {
  const [btnColor,setBtnColor] = useState('error');

  return (
    <div>
        <h1>This is login page</h1>
        <Button onClick={() => setBtnColor("success")} color={btnColor} size='large' variant='contained'>hello</Button>
        
    </div>
  )
}

export default Login