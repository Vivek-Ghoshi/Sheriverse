import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

export const createCourse = createAsyncThunk("admin/createCourse",async(courseData)=> {
    try {
        const {data} = await apiInstance.post(`/admin/course/create`,courseData,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        });
        return data;
    } catch (error) {
        console.log(error.message)
    }
});

export const deleteCourse = createAsyncThunk("admin/deleteCourse", async(id)=>{
    try {
        await apiInstance.get(`/admin/course/delete/:${id}`);
        return id;
    } catch (error) {
        console.log(error.message);
    }
});

export const addInstructor = createAsyncThunk("admin/addinstructor", async (details)=>{
    try {
        const {data} = await apiInstance.post(`/admin/instructor/create`,details);
        return data;
    } catch (error) {
        console.log(error.message);
    }
})

export const removeInstructor = createAsyncThunk("admin/removeinstructor", async (id)=>{
    try {
      await apiInstance.get(`/admin/instructor/remove/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})

export const allInstructors = createAsyncThunk("admin/instructors",async()=>{
    const {data} = await apiInstance.get('/admin/all-instructors')
    return data;
})

export const uploadContent = createAsyncThunk("uploadContent", async({formData,id})=>{
    const {data} = await apiInstance.post(`/admin/courses/${id}/add-content`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
    });
  console.log("data came from route backend ", data);
    return data;
})

export const getRegisterdStudents = createAsyncThunk("getregisterdstudents", async()=>{
    const {data} = await apiInstance.get('/admin/all/students')
    return data;
})

export const getRegisterdAdmins = createAsyncThunk("getregisterdadmins", async()=>{
    const {data} = await apiInstance.get('/admin/all/admins');
    return data;
})

export const registerAdmin = createAsyncThunk("registeradmin", async(details)=>{
    try {
        const {data} = await apiInstance.post("/admin/create",details);
        return data;
    } catch (error) {
        console.log(error.message);
    }
})
const adminSlice = createSlice({
    name: "admin",
    initialState: {courses:[], instructors: [],students:[],admins:[],loading: false},
    reducers:{},
    extraReducers : (builder)=>{
        builder
              .addCase(createCourse.pending, (state)=> {state.loading = true})
              .addCase(createCourse.fulfilled, (state,action) =>{
                 state.loading = false;
                 state.courses.push(action.payload);
              })
              .addCase(deleteCourse.fulfilled, (state,action)=>{
                state.courses = state.courses.filter((course)=> course.id != action.payload);
              })
              .addCase(registerAdmin.fulfilled,(state,action)=>{
                state.admins.push(action.payload);
              })
              .addCase(addInstructor.fulfilled, (state,action)=>{
                state.instructors.push(action.payload);
              })
              .addCase(removeInstructor.fulfilled, (state,action)=>{
                 state.instructors = state.instructors.filter(inst => inst._id !== action.payload);
              })
             .addCase(allInstructors.fulfilled, (state,action)=>{
                state.instructors = action.payload;
             })
             .addCase(uploadContent.fulfilled,(state,action)=>{
                state.courses.push(action.payload);
             })
             .addCase(getRegisterdStudents.fulfilled, (state,action)=>{
                state.students = action.payload;
             })
             .addCase(getRegisterdAdmins.fulfilled,(state,action)=>{
                state.admins = action.payload;
             })

    },
})

export default adminSlice.reducer;
