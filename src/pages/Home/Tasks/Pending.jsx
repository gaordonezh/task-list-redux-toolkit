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
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "store/slices/tasks";
import { setOpen } from "store/slices/modal";

const Pending = ({ list }) => {
  const dispatch = useDispatch();
  const handleUpdate = (code) => () => updateTask({ status: "IN_PROCESS" }, code, dispatch);

  return (
    <React.Fragment>
      {list.map((row, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <IconButton color="primary" onClick={handleUpdate(row._id)}>
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
            onClick={() => dispatch(setOpen(row))}
          />
          <ListItemSecondaryAction>
            <IconButton color="error" onClick={removeTask(row._id, dispatch)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </React.Fragment>
  );
};

export default Pending;
