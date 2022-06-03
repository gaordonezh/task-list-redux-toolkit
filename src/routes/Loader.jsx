import { Fragment } from "react";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import LoaderGeneral from "components/Loader";
//-----------------------|| Loader ||-----------------------//

const Linear = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,
  width: "100%",
});
const Loader = () => {
  return (
    <Fragment>
      <Linear>
        <LinearProgress color="primary" />
      </Linear>
      <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
        <Grid item>
          <LoaderGeneral />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Loader;
