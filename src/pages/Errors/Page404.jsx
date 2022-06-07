import { Grid, Typography } from "@mui/material";
import Animation from "components/Animation";
import Page from "components/Page";
import json from "assets/json/empty.json";

const Page404 = () => {
  return (
    <Page title="Página no encontrada...">
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

export default Page404;
