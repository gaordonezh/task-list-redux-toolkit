import React from "react";
import { ChevronRight, KeyboardArrowUp } from "@mui/icons-material";
import { IconButton, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Done = ({ list }) => {
  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 200 }}>
            <ListItemIcon>
              <ChevronRight color="primary" />
            </ListItemIcon>
            <ListItemText primary="DONE" />
          </ListItem>

          {[1, 2, 3, 4].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <IconButton color="success">
                  <KeyboardArrowUp />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="inherit" sx={{ textDecoration: "line-through" }} color="text.secondary">
                    ITEM LIST
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ textDecoration: "line-through" }} color="text.secondary">
                    lorem ansbda dnkasd ansmd basdabsda sdasbdvasdasd
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Done;
