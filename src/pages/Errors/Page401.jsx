import { Grid, Typography } from "@mui/material";
import Animation from "components/Animation";
import Page from "components/Page";
import json from "assets/json/empty.json";

const Page401 = () => {
  return (
    <Page title="Loading...">
      <Grid container minHeight="100vh" component="section" alignItems="center" justifyContent="center">
        <Grid item sx={{ width: 300 }}>
          <Typography variant="h1" align="center">
            401
          </Typography>
          <Animation src={json} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Page401;
