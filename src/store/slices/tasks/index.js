import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../../../requests/taks";

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
    .then((res) => dispatch(setTaskList(res.data)))
    .catch((error) => console.log(error));
};
