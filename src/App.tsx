import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "./router/router";
import {Container, Grid} from "@mui/material";

function App() {
  return (
    <Container className="App">
      <Router />
    </Container>
  );
}

export default App;
