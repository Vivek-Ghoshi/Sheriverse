import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

export const getAllCourses = createAsyncThunk("getallcourses", async()=>{
    const  { data }  = await apiInstance.get('/courses',{
        withCredentials:true,
    });
    return data;
})
// export const assignment = createAsyncThunk("student/assignments", async()=>{
//     const {data} = await apiInstance.get("/student/assignments",{withCredentials:true});
//     return data;
// })
const commanSlice = createSlice({
    name: "comman",
    initialState:{courses: [],loading:false},
    reducers:{},
    extraReducers: (builder)=>{
        builder
           .addCase(getAllCourses.pending, (state)=>{
            state.loading = true;
           })
           .addCase(getAllCourses.fulfilled, (state,action)=>{
             state.loading = false,
             state.courses = action.payload;
           })
    }
})

export default commanSlice.reducer;