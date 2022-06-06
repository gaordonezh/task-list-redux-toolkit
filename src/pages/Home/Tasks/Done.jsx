import React, { useState } from "react";
import { ChevronRight, KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { IconButton, ListItem, ListItemIcon, ListItemText, Typography, FormHelperText, Collapse } from "@mui/material";
import moment from "moment";

const Done = ({ list }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 230 }} onClick={() => setOpen(!open)}>
            <ListItemIcon>{open ? <KeyboardArrowDown color="success" /> : <ChevronRight color="success" />}</ListItemIcon>
            <ListItemText primary={`DONE (${list.length})`} />
          </ListItem>

          <Collapse in={open}>
            {list.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton color="success">
                    <KeyboardArrowUp />
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="inherit" sx={{ textDecoration: "line-through" }} color="text.secondary">
                      {item.name}
                      <FormHelperText component="span" sx={{ color: "#aaa" }}>
                        {` ─ ${moment(item.createdAt).fromNow()}`}
                      </FormHelperText>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ textDecoration: "line-through" }} color="text.secondary">
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </Collapse>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Done;
