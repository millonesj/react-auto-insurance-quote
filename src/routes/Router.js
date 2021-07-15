import React from 'react';
import Login from '../pages/login/Login'
import theme from '../components/ui/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
const { BrowserRouter, Switch, Route } = require('react-router-dom')

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider >

  )
}

export default Router;