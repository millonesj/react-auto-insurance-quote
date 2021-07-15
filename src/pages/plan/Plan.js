import { Grid } from '@material-ui/core';
import TopBar from './topbar/Topbar';
import ContentPlan from './content-plan/ContentPlant';

const Plan = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TopBar />
      </Grid>
      <Grid item xs={12}>
        <ContentPlan />
      </Grid>
    </Grid>
  );
};

export default Plan;
