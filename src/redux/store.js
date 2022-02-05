import { configuresStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

export default configuresStore({
  reducer: {
    tasks: taskReducer,
  },
});
