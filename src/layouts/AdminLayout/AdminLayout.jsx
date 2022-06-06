import { useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "requests/user";
import { setCurrentUser } from "store/slices/user";
import { Box, Container } from "@mui/material";
import Loader from "components/Loader";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
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
      if (res) dispatch(setCurrentUser(res));
      else navigate("/");
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin">
      <main className="admin__layout">
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
