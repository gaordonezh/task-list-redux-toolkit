import { Grid } from "@mui/material";
import Animation from "components/Animation";
import Page from "components/Page";

const Page401 = () => {
  return (
    <Page title="Cargando...">
      <Grid
        container
        minHeight="100vh"
        component="section"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item component="article">
          401
          {/* <Animation src={animation} style={{ maxWidth: "100%", maxHeight: "100%" }} /> */}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Page401;
