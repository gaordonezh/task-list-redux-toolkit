import { IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, Google, LinkedIn } from "@mui/icons-material";

const Platforms = () => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <Google />
      </IconButton>
      <IconButton>
        <LinkedIn />
      </IconButton>
    </Stack>
  );
};

export default Platforms;
