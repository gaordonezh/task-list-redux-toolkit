import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import tasks from "./slices/tasks";
import modal from "./slices/modal";

export default configureStore({
  reducer: { user, tasks, modal },
});
