import React from 'react';
import LoginBanner from './login-banner/LoginBanner';
import { Grid } from '@material-ui/core';
import '@fontsource/lato';
import LoginData from './login-data/LoginData';

const Login = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} sm={5} className="Login__banner-container">
        <LoginBanner></LoginBanner>
      </Grid>
      <Grid item xs={12} sm={7} className="Login__data-container">
        <LoginData></LoginData>
      </Grid>
    </Grid>
  );
};

export default Login;
