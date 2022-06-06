import React from "react";
import { Delete, RadioButtonUnchecked } from "@mui/icons-material";
import {
  FormHelperText,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment";
import { updateTask } from "requests/taks";
import { useDispatch } from "react-redux";
import { fetchAllTasks } from "store/slices/tasks";

const Pending = ({ list }) => {
  const dispatch = useDispatch();

  const changeStatus = (status, code) => async () => {
    await updateTask({ status }, code);
    dispatch(fetchAllTasks());
  };

  return (
    <React.Fragment>
      {list.map((row, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <IconButton color="primary" onClick={changeStatus("IN_PROCESS", row._id)}>
              <RadioButtonUnchecked />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="inherit">
                {row.name}
                <FormHelperText component="span" sx={{ color: "#aaa" }}>
                  {` ─ ${moment(row.createdAt).fromNow()}`}
                </FormHelperText>
              </Typography>
            }
            secondary={<Typography variant="body2">{row.description}</Typography>}
          />
          <ListItemSecondaryAction>
            <IconButton color="error">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default Pending;
