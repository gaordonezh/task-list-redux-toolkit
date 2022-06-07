import React, { useState } from "react";
import { Fab, InputAdornment, TextField } from "@mui/material";
import { Add, ArrowCircleUp } from "@mui/icons-material";
import { createTask } from "store/slices/tasks";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const saveTask = () => {
    if (text) {
      createTask({ name: text }, dispatch);
      setText("");
    }
  };

  return (
    <TextField
      label=""
      fullWidth
      className="float__text"
      multiline
      variant="outlined"
      value={text}
      onChange={(event) => setText(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Add fontSize="large" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Fab size="small" color="primary" onClick={saveTask}>
              <ArrowCircleUp fontSize="large" />
            </Fab>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Create;
