import { IconButton, Stack, Typography } from "@mui/material";
import { Apps } from "@mui/icons-material";
import moment from "moment";

const Header = () => (
  <Stack direction="column" spacing={2}>
    <Stack direction="row" justifyContent="space-between">
      <Stack>
        <Typography component="h1" variant="h3" fontWeight={900}>
          My Activities
        </Typography>
        <Typography variant="body2">{moment().format("dddd, MMMM DD YYYY")}</Typography>
      </Stack>
      <IconButton color="inherit">
        <Apps fontSize="large" />
      </IconButton>
    </Stack>
  </Stack>
);

export default Header;
