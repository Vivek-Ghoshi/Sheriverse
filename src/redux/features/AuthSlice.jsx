import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

export const registerUser = createAsyncThunk("auth/register", async(credentials)=>{
  try {
    const { data } = await apiInstance.post('/student/register',credentials,{withCredentials:true});
    return data;
  } catch (error) {
    console.log(error.message);
  }
})
export const loginUser = createAsyncThunk("auth/login",async ({role,credentials})=>{
  try {
    const {data} = await apiInstance.post(`/${role}/login`, credentials , {withCredentials: true});
    return { user: data, role};
  } catch (error) {
    console.log(error.message);
  }
    
});

export const logoutUser = createAsyncThunk("auth/logout", async(role)=>{
  try {
    await apiInstance.get(`/${role}/logout`, {withCredentials: true});
    return null;
  } catch (error) {
    console.log(error.message);
    return isRejectedWithValue(error.response?.data?.message || "Logout failed");
  }
    
});

const authSlice = createSlice({
    name: "auth",
    initialState: {user:null,role:null, loading:false, error:null},
    reducers: {},
    extraReducers: (builder) =>{
        builder
              .addCase(loginUser.pending, (state)=> {state.loading = true;} )
              .addCase(loginUser.fulfilled, (state,action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.role = action.payload.role;
              })
              .addCase(loginUser.rejected, (state,error) => {
                state.loading = false;
                
                state.error = action.error.message;
              })
              .addCase(logoutUser.pending,(state)=>{
                state.loading = true;
              })
              .addCase(logoutUser.fulfilled, (state)=> {
                state.loading = false;
                state.user = null;
                state.role = null;
              })
              .addCase(registerUser.fulfilled,(state,action)=>{
                state.user = action.payload;
              })
    },
})

export default authSlice.reducer;

