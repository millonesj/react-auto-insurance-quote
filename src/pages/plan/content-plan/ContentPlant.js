import { Grid } from '@material-ui/core';
import '@fontsource/lato';

const ContentPlan = () => {
  return (
    <div className="ContentPlan" style={{ height: '100vh' }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        align="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          className="ContentPlan__seteps"
          style={{ minHeight: '100vh' }}
        >
          <div>Datos</div>
          <div>Arma tu plan</div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className="ContentPlan__greetings">
            ¡Hola, <span className="ContentPlan__greetings--name">Juan!</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentPlan;
