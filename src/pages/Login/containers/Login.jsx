import { useState } from "react";
import Page from "components/Page";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ChangeView from "../components/ChangeView";
import { Box } from "@mui/material";

const Login = () => {
  const [view, setView] = useState(false);

  return (
    <Page title="Iniciar Sesión">
      <Box className={`container ${view ? "sign-up-mode" : ""}`}>
        <Box className="forms-container">
          <Box className="signin-signup">
            <SignIn />
            <SignUp />
          </Box>
        </Box>
        <ChangeView setView={setView} view={view} />
      </Box>
    </Page>
  );
};

export default Login;
