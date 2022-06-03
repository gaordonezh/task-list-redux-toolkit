import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Logo = () => {
  const LogoImage = styled("img")(({ theme }) => ({
    height: 75,
    width: 75,
    [theme.breakpoints.down("md")]: {
      height: 50,
      width: 50,
    },
  }));

  return (
    <Link to="/">
      <LogoImage
        src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg"
        alt="Logo images"
      />
    </Link>
  );
};

export default Logo;
