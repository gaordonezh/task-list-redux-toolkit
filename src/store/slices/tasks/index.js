import { createSlice } from "@reduxjs/toolkit";
import { postTasks, deleteTask, getTasks, putTask } from "requests/taks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
    loading: true,
  },
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

const { setTaskList, setLoading } = taskSlice.actions;

export default taskSlice.reducer;

export const fetchAllTasks = () => (dispatch) => getTasks().then((res) => dispatch(setTaskList(res)));
export const createTask = (body, dispatch) => {
  dispatch(setLoading());
  postTasks(body).then(() => dispatch(fetchAllTasks()));
};
export const updateTask = (body, code, dispatch) => {
  dispatch(setLoading());
  putTask(body, code).then(() => dispatch(fetchAllTasks()));
};
export const removeTask = (code, dispatch) => () => {
  dispatch(setLoading());
  deleteTask(code).then(() => dispatch(fetchAllTasks()));
};
