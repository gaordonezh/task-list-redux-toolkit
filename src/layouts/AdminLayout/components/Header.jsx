import { Stack, Typography } from "@mui/material";
import moment from "moment";
import UserSettings from "./UserSettings";

const Header = () => (
  <Stack direction="column" spacing={2}>
    <Stack direction="row" justifyContent="space-between">
      <Stack>
        <Typography component="h1" variant="h3" fontWeight={900}>
          My Activities
        </Typography>
        <Typography variant="body2">{moment().format("dddd, MMMM DD YYYY")}</Typography>
      </Stack>
      <UserSettings />
    </Stack>
  </Stack>
);

export default Header;
