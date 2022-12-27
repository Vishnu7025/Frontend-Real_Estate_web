import React from 'react'
import { Link } from 'react-router-dom'
import CustomCard from './CustomCard'
import { Button, Typography,Grid } from "@mui/material";
import { ScopedCssBaseline } from '@mui/material';

function Home() {
  return (
  <>
        <Grid item xs={8}>
          <CustomCard />
        </Grid>
        <Grid item xs={4}>
              <CustomCard />
                </Grid>
        <Grid item xs={4}>
              <CustomCard />
                </Grid>
        <Grid item xs={8}>
              <CustomCard />
                </Grid>
  </>

  )
}

export default Home