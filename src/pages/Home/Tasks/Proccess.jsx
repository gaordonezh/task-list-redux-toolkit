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
import { changeStatus } from "store/slices/tasks";
import moment from "moment";

const Proccess = ({ list }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {list.length > 0 ? (
        <React.Fragment>
          <ListItem button sx={{ marginTop: "25px !important", width: 230 }} onClick={() => setOpen(!open)}>
            <ListItemIcon>{open ? <KeyboardArrowDown color="warning" /> : <ChevronRight color="warning" />}</ListItemIcon>
            <ListItemText primary={`IN PROCCESS (${list.length})`} />
          </ListItem>

          <Collapse in={open}>
            {list.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton color="warning" onClick={changeStatus("DONE", item._id, dispatch)}>
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
                />
                <ListItemSecondaryAction>
                  <IconButton color="error">
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
