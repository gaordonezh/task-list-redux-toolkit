import { useEffect, useState } from "react";
import Page from "components/Page";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ChangeView from "../components/ChangeView";
import { Box } from "@mui/material";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    verifyExistUser();
    // eslint-disable-next-line
  }, []);

  const verifyExistUser = () => {
    const result = StorageService.get(SESSION_USER);
    if (result) navigate("/tasks");
  };

  return (
    <Page title="Welcome">
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
