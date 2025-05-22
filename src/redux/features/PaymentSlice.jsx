import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

//create razorpay order
export const createOrder = createAsyncThunk("createorder", async(id)=>{
   try {
       const {data} = await apiInstance.post('/payment/create-order',{id},{withCredentials:true});
       return data;
   } catch (error) {
      console.log(error.message);
   }
})


const paymentSlice = createSlice({
  name: "payment",
  initialState: { loading: false, success: false, error: null },
  reducers: {
    resetPaymentState: {
      loading: false,
      error: null,
      success: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export const {resetPaymentState} = paymentSlice.actions;
export default paymentSlice.reducer;