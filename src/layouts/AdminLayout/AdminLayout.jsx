import { useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "requests/user";
import { setCurrentUser, setBackground } from "store/slices/user";
import { Box, Container } from "@mui/material";
import Loader from "components/Loader";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { currentUser, background } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!currentUser._id) handleToken();
    // eslint-disable-next-line
  }, []);

  const handleToken = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo();
      if (res) {
        dispatch(setCurrentUser(res));
        dispatch(setBackground(res.background));
      } else handleRedirect();
    } catch (error) {
      handleRedirect();
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    StorageService.remove(SESSION_USER);
    navigate("/");
  };

  return (
    <div className="admin">
      <main
        className="admin__layout"
        style={{
          backgroundImage: `url(${background ?? "./static/images/backgroundOne.jpg"} )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <Container maxWidth="lg">
            <Box py={3}>
              <Header />
              <Box className="main__container">
                <Outlet />
              </Box>
            </Box>
          </Container>
        )}
      </main>
    </div>
  );
};

export default AdminLayout;
