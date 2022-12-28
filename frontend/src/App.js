import {BrowserRouter,Route,Routes} from "react-router-dom";
import React from 'react'
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./Components/Home";
import Login from "./Components/Login"
import Listing from "./Components/Listing"
import Header from "./Components/Header";




function App() {
  return (
    <BrowserRouter>
    <CssBaseline />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/listing" element={<Listing />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
