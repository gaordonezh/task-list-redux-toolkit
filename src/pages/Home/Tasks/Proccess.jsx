import React, { useState } from "react";
import { Delete, RadioButtonChecked, KeyboardArrowDown, ChevronRight } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  FormHelperText,
  Collapse,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "store/slices/tasks";
import moment from "moment";
import { setOpen } from "store/slices/modal";

const Proccess = ({ list }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const handleUpdate = (code) => () => updateTask({ status: "DONE" }, code, dispatch);

  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 230 }} onClick={() => setVisible(!visible)}>
            <ListItemIcon>{visible ? <KeyboardArrowDown color="warning" /> : <ChevronRight color="warning" />}</ListItemIcon>
            <ListItemText primary={`IN PROCCESS (${list.length})`} />
          </ListItem>

          <Collapse in={visible}>
            {list.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton color="warning" onClick={handleUpdate(item._id)}>
                    <RadioButtonChecked />
                  </IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="inherit" fontWeight={600}>
                      {item.name}
                      <FormHelperText component="span" sx={{ color: "#aaa" }}>
                        {` ─ ${moment(item.createdAt).fromNow()}`}
                      </FormHelperText>
                    </Typography>
                  }
                  secondary={<Typography variant="body2">{item.description}</Typography>}
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

export default Proccess;
