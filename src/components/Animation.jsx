import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

const Animation = ({ src, sx }) => {
  return (
    <Box p={2}>
      <Player loop src={src} style={{ width: "100%", ...sx }} autoplay={true} />
    </Box>
  );
};

export default Animation;
