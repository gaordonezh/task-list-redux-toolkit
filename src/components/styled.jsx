import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: "200px",
  height: "200px",
  position: "absolute",
  top: "-100px",
  left: "calc(50% - 100px)",
}));

export const BoxContainerStyled = styled(Box)(({ theme }) => ({
  background: `radial-gradient(circle, rgba(200,200,200,1) 0%, ${theme.palette.primary.main} 100%)`,
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "20px",
}));

export const BoxInsideStyled = styled(Box)(({ theme }) => ({
  padding: "120px 0 50px 0",
  margin: "0 20px",
  height: "100%",
}));
