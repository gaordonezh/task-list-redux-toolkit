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

const Pending = ({ list }) => (
  <React.Fragment>
    {list.map((row, index) => (
      <ListItem key={index}>
        <ListItemIcon>
          <IconButton color="primary">
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

export default Pending;
