import { Box, Grid } from "@mui/material";
const Loader = () => {
  return (
    <Box p={5} component="section">
      <Grid container alignItems="center" justifyContent="center" component="article">
        <Grid item className="preloader__content">
          <div className="loading"></div>
          <div className="loading2"></div>
          <img src="/logo/white.png" height="90px" width="100%" alt="Logo gaordonezh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loader;
