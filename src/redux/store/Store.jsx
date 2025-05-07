import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import adminReducer from "../features/AdminSlice";
import studentReducer from "../features/StudentSlice";
import instructorReducer from "../features/InstructorSlice";
import commanReducer from "../features/CommanSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        admin:adminReducer,
        student:studentReducer,
        instructor: instructorReducer,
        comman: commanReducer
    }
});

export default store;