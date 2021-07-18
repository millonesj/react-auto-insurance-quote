import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../assets/images/logo-rimac.png';
import Box from '@material-ui/core/Box';

const Topbar = () => {
  return (
    <AppBar
      position="static"
      className="Topbar"
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar className="Topbar">
        <Box display="flex" flexGrow={1}>
          <img src={Logo} alt="logo" flexGrow={1} />
        </Box>

        <div className="Topbar__right-header">
          <div className="Topbar__question">¿Tienes alguna duda?</div>
          <div className="Topbar__phone">(01) 411 6001</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
