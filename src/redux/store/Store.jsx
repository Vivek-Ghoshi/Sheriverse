import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import adminReducer from "../features/AdminSlice";
import studentReducer from "../features/StudentSlice";
import instructorReducer from "../features/InstructorSlice";
import commanReducer from "../features/CommanSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const rootReducer = combineReducers({
    auth: authReducer,
    admin:adminReducer,
    instructor:instructorReducer,
    student: studentReducer,
    comman:commanReducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false}),
    
});

export const persistor = persistStore(store);