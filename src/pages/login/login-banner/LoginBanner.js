import { Grid } from '@material-ui/core';

const LoginBanner = () => {
  return (
    <Grid
      container
      className="LoginBanner"
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container item xs={3} sm={12} justifyContent="center">
        <div className="LoginBanner__image"></div>
      </Grid>
      <Grid container item xs={9} sm={12} justifyContent="center">
        <div className="LoginBanner__text-container">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div>¡NUEVO!</div>
            </Grid>
            <Grid item xs={12} className="title">
              Seguro<span className="title--red"> Vehicular</span>
            </Grid>
            <Grid item xs={12}>
              <div className="title title--red">Tracking</div>
            </Grid>
            <Grid item xs={12}>
              Cuentanos donde le haras seguimiento a tu seguro
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginBanner;
