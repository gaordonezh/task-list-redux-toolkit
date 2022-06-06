import React, { useState } from "react";
import { ChevronRight, KeyboardArrowUp, KeyboardArrowDown, Delete } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  FormHelperText,
  Collapse,
  ListItemSecondaryAction,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "store/slices/tasks";
import moment from "moment";
import { setOpen } from "store/slices/modal";

const Done = ({ list }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const handleUpdate = (code) => () => updateTask({ status: "PENDING" }, code, dispatch);

  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 230 }} onClick={() => setVisible(!visible)}>
            <ListItemIcon>{visible ? <KeyboardArrowDown color="success" /> : <ChevronRight color="success" />}</ListItemIcon>
            <ListItemText primary={`DONE (${list.length})`} />
          </ListItem>

          <Collapse in={visible}>
            {list.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton color="success" onClick={handleUpdate(item._id)}>
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
                  onClick={() => dispatch(setOpen(item))}
                />
                <ListItemSecondaryAction>
                  <IconButton color="error" onClick={removeTask(item._id, dispatch)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </Collapse>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Done;
