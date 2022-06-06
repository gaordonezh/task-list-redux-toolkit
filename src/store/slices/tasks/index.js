import { createSlice } from "@reduxjs/toolkit";
import { getTasks, updateTask } from "requests/taks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
  },
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
    },
  },
});

const { setTaskList } = taskSlice.actions;

export default taskSlice.reducer;

export const fetchAllTasks = () => (dispatch) => {
  getTasks()
    .then((res) => dispatch(setTaskList(res)))
    .catch((error) => console.log(error));
};

export const changeStatus = (status, code, dispatch) => () => {
  updateTask({ status }, code).then(() => dispatch(fetchAllTasks()));
};
