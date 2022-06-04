import React, { useState } from "react";
import { Fab, InputAdornment, TextField } from "@mui/material";
import { postTasks } from "requests/taks";
import { Add, ArrowCircleUp } from "@mui/icons-material";
import { fetchAllTasks } from "store/slices/tasks";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const saveTask = async () => {
    try {
      if (text) {
        const toSend = { name: text, description: "----------" };
        await postTasks(toSend);
        setText("");
        dispatch(fetchAllTasks());
      }
    } catch (error) {
      console.log(error);
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
