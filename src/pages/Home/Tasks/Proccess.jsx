import React from "react";
import { Delete, RadioButtonChecked, KeyboardArrowDown } from "@mui/icons-material";
import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";

const Proccess = ({ list }) => {
  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 200 }}>
            <ListItemIcon>
              <KeyboardArrowDown color="primary" />
            </ListItemIcon>
            <ListItemText primary="IN PROCCESS" />
          </ListItem>

          {list.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <IconButton color="warning">
                  <RadioButtonChecked />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="inherit" fontWeight={600}>
                    lorem ansbda dnkasd ansmd basdabsda sdasbdvasdasd
                  </Typography>
                }
                secondary={<Typography variant="body2">lorem ansbda dnkasd ansmd basdabsda sdasbdvasdasd</Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Proccess;
