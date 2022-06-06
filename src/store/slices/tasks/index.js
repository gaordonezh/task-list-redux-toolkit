import { createSlice } from "@reduxjs/toolkit";
import { postTasks, deleteTask, getTasks, putTask } from "requests/taks";

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

export const fetchAllTasks = () => (dispatch) => getTasks().then((res) => dispatch(setTaskList(res)));
export const createTask = (body, dispatch) => () => postTasks(body).then(() => dispatch(fetchAllTasks()));
export const updateTask = (body, code, dispatch) => putTask(body, code).then(() => dispatch(fetchAllTasks()));
export const removeTask = (code, dispatch) => () => deleteTask(code).then(() => dispatch(fetchAllTasks()));
