import { Box, Grid } from "@mui/material";
import json from "assets/json/loading.json";
import Animation from "./Animation";

const Loader = () => {
  return (
    <Box p={5} component="section">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item sx={{ width: 350 }}>
          <Animation src={json} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loader;
