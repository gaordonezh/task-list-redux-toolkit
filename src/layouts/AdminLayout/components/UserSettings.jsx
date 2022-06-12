import React from "react";
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
import { useState } from "react";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";
import { useNavigate } from "react-router-dom";

const UserSettings = () => {
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={() => setModal(!modal)}>
        <Apps fontSize="large" />
      </IconButton>

      <Modal open={modal} setOpen={setModal} />
    </React.Fragment>
  );
};

export default UserSettings;

const createTempImages = () => {
  const images = [];
  for (let i = 0; i < 21; i++) {
    images.push(`https://picsum.photos/${90 + i}/${90 + i}`);
  }

  return images;
};

const Modal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    StorageService.remove(SESSION_USER);
    navigate("/");
  };

  return (
    <Drawer open={open} anchor="right" onClose={handleClose}>
      <Card sx={{ width: 350, height: "100%", borderRadius: 0 }}>
        <CardContent>
          <List>
            <ListItem>
              <Box className="user_images">
                <Grid container spacing={1}>
                  {[...createTempImages()].map((item, index) => (
                    <Grid item key={index} xs={4}>
                      <CardActionArea>
                        <CardMedia component="img" image={item} alt={`Image ${index}`} />
                      </CardActionArea>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </ListItem>
            <ListItem button>
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
          </List>
        </CardContent>
      </Card>
    </Drawer>
  );
};
