import React, { useEffect } from "react";
import {
  Drawer,
  IconButton,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Grid,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { AccountBox, Apps, Logout } from "@mui/icons-material";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";
import { useNavigate } from "react-router-dom";
import { getUnsplashImages, putUser } from "requests/user";
import { setImages, setModal, setBackground } from "store/slices/user";
import { useDispatch, useSelector } from "react-redux";

const UserSettings = () => {
  const dispatch = useDispatch();
  const { modal, images, currentUser } = useSelector((state) => state.user);

  const handleToggleModal = () => dispatch(setModal());

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={handleToggleModal}>
        <Apps fontSize="large" />
      </IconButton>
      <Modal open={modal} setOpen={handleToggleModal} images={images} dispatch={dispatch} userId={currentUser._id} />
    </React.Fragment>
  );
};

export default UserSettings;

const Modal = ({ open, setOpen, images, dispatch, userId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    StorageService.remove(SESSION_USER);
    navigate("/");
  };

  useEffect(() => {
    obtainImages();
    // eslint-disable-next-line
  }, []);

  const obtainImages = async () => {
    const res = await getUnsplashImages();
    dispatch(setImages(res));
  };

  const handleSetImage = (info) => async () => {
    const background = info.images.regular;
    dispatch(setBackground(background));
    await putUser({ background }, userId);
  };

  const toProfile = () => {
    navigate("/profile");
    setOpen();
  };

  return (
    <Drawer open={open} anchor="right" onClose={setOpen}>
      <Card sx={{ width: 350, height: "100%", borderRadius: 0 }}>
        <CardContent>
          <List>
            <ListItem button onClick={toProfile}>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" secondary="Go to your profile" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" secondary="Close your session" />
            </ListItem>
            <ListItem>
              <Box className="user_images">
                <Grid container spacing={1}>
                  {images.map((item, index) => (
                    <Grid item key={index} xs={4}>
                      <CardActionArea onClick={handleSetImage(item)}>
                        <CardMedia component="img" image={item.images.thumb} alt={item.id} height="100px" />
                      </CardActionArea>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Drawer>
  );
};
