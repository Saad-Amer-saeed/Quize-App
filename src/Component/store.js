import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";
const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});
// console.log(store);
export default store;
