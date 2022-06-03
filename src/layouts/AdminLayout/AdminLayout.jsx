import { Fragment, useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "requests/user";
import { setCurrentUser } from "store/slices/user";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!currentUser._id) handleToken();
  }, []);

  const handleToken = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo();
      if (res) {
        dispatch(setCurrentUser(res));
      } else {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {loading ? (
        "CARGANDOOO"
      ) : (
        <Fragment>
          <Navbar />
          <Outlet />
        </Fragment>
      )}
    </main>
  );
};

export default AdminLayout;
