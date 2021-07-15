import LoginBanner from './login-banner/LoginBanner'

import { Grid } from '@material-ui/core'
import '@fontsource/lato';
import LoginData from './login-data/LoginData';

const Login = () => {
  return (
    <div className="Login" style={{ height: '100vh' }}>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        align="center" justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={5}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
          <LoginBanner></LoginBanner>
        </Grid>
        <Grid item xs={12} sm={7}>
          <LoginData></LoginData>
        </Grid>
      </Grid>
    </div>
  )
}

/* 
<LoginBanner></LoginBanner>
*/
export default Login