import Animation from "components/Animation";
import json from "assets/json/empty.json";
import { Box, Stack, Typography } from "@mui/material";

const EmptyTasks = () => (
  <Stack justifyContent="center" alignItems="center" sx={{ height: "calc((100vh) - 200px)" }}>
    <Box p={3} className="empty__box">
      <Stack spacing={2} direction="column">
        <Animation src={json} />
        <Typography variant="h4" textAlign="center">
          Empty tasks
        </Typography>
        <Typography variant="body2" textAlign="center">
          Focus on your day. Get things done with my day, a list that refreshes every day.
        </Typography>
      </Stack>
    </Box>
  </Stack>
);

export default EmptyTasks;
